"use client";
import React, { useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import DemoCard from "./support/DemoCard";
import ImageCard from "./support/ImageCard";

let cards = [
  {
    title: "New York",
    description:
      "New York City, often simply called New York, is the most populous city in the United States. With its iconic skyline dominated by skyscrapers such as the Empire State Building and One World Trade Center, it is a global center for finance, culture, fashion, and entertainment.",
    image: "/newyork.jpeg",
  },
  {
    title: "London",
    description:
      "London, the capital of England and the United Kingdom, is a 21st-century city with a history stretching back to Roman times. Its iconic landmarks include the Houses of Parliament, the Tower of London, and Buckingham Palace. London is renowned for its arts, culture, fashion, and cuisine.",
    image: "/london.webp",
  },
  {
    title: "Mumbai",
    description:
      "Mumbai, formerly known as Bombay, is the financial, commercial, and entertainment capital of India. It is a bustling metropolis known for its vibrant street life, historic landmarks like the Gateway of India, and the Bollywood film industry. Mumbai is a melting pot of cultures and cuisines.",
    image: "/bombay.jpeg",
  },
];

const StickScrollDualComponent = () => {
  const targetRef = React.useRef(null);
  const [activeCard, setActiveCard] = React.useState(0);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-80%", "35%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-70%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = cards.map(
      (_, index) => index / cards.length + 0.33
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-[100vw] bg-black flex flex-row justify-center"
    >
      <div className="absolute h-full bg-black [mask-image:radial-gradient(ellipse_30%_30%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="absolute flex flex-col w-[100vw] top-0 h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5581d466] via-[#5581d413] to-[#5581d400]"></div>
      <div className="sticky top-0 flex flex-row justify-center h-screen items-center overflow-hidden z-100 w-[60vw] [mask-image:radial-gradient(ellipse_80%_40%_at_50%_50%,#000_60%,transparent_100%)]">
        <motion.div
          style={{ y: y }}
          className="flex flex-col w-9/12 gap-y-[100px]"
        >
          {cards.map((card, index) => {
            return (
              <DemoCard
                opacity={activeCard == cards.length - index - 1 ? 1 : 0}
                title={card.title}
                description={card.description}
                index={index}
                key={index}
              />
            );
          })}
        </motion.div>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[40vw]">
        <motion.div style={{ x }} className="flex gap-x-[100px]">
          {cards.reverse().map((card, index) => {
            return (
              <ImageCard
                index={index}
                opacity={activeCard == index ? 0 : 1}
                key={index}
                image={card.image}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StickScrollDualComponent;
