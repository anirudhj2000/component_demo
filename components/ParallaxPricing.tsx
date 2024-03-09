"use client";
import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import PricingCard from "./support/PricingCard";

const pricingClass =
  "h-[60vh] w-[30%] bg-[#000] border-[1px] flex flex-col relative items-center rounded-xl border-[#5581d4] shadow-[0_4px_24px_2px_rgba(85,129,212,0.5)]";

let plans = [
  {
    name: "Basic",
    price: "10$",
    description: "Includes all the features listed below",
    features: [
      "GPS Tracking",
      "Basic Maintenance Scheduling",
      "Driver Analytics (Limited)",
      "Fuel Consumption Reports",
      "Green and Safe Driving Features",
    ],
    buttonTitle: "Buy Now",
  },
  {
    name: "Pro",
    price: "50$",
    description: "Everything in Hobby, plus higher limits and team features",
    features: [
      "Advanced GPS Tracking",
      "Advanced Maintenance Scheduling",
      "Comprehensive Driver Analytics",
      "Fuel Management Tools",
      "Route Optimization",
      "Live Tracking",
      "Order Management",
    ],
    buttonTitle: "Upgrade Now",
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Get a customised quote based on your requirements",
    features: [
      "Custom GPS Tracking",
      "Advanced Maintenance Scheduling",
      "Comprehensive Driver Analytics",
      "Fuel Management Tools",
      "Route Optimization",
      "Live Tracking",
      "Route Planning",
      "Geofencing",
      "Order Management",
    ],
    buttonTitle: "Contact Sales",
  },
];
const ParallaxPricingComponent = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["17.5%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "50%"]);

  return (
    <section className="flex flex-col h-[100vh] items-center w-full relative z-0">
      <div className="absolute z-50 flex flex-col w-full bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#5581d466] via-[#5581d413] to-[#5581d400] "></div>
      <div className="absolute z-40 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="absolute top-[12.5%] w-full flex flex-col justify-center items-center">
        <p className="text-[2.4rem] font-bold text-white">Pricing</p>
        <p className="text-[1rem] text-white mx-16">
          {
            "Our pricing offers exceptional value, combining affordability with comprehensive features to maximize your fleet management investment."
          }
        </p>
      </div>
      <div className=" sticky flex flex-row w-8/12 h-full justify-between z-60">
        <motion.div style={{ y: y2 }} className={pricingClass}>
          <PricingCard obj={plans[0]} />
        </motion.div>
        <motion.div style={{ y: y }} className={pricingClass}>
          <PricingCard obj={plans[1]} />
        </motion.div>
        <motion.div style={{ y: y3 }} className={pricingClass}>
          <PricingCard obj={plans[2]} />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxPricingComponent;
