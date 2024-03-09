"use client";
import React from "react";
import { motion } from "framer-motion";

interface RotatingTextComponentInterface {
  constantText: string;
  rotatingText: Array<string>;
}

let fontSize = 64;

const RotatingTextComponent = ({
  constantText,
  rotatingText,
}: RotatingTextComponentInterface) => {
  return (
    <div className="flex flex-row items-center justify-between mr-64">
      <p
        style={{ fontSize: `${fontSize}px` }}
        className={`text-white font-bold`}
      >
        {constantText}
      </p>
      <div className="relative ml-4">
        {rotatingText.map((item, index) => {
          return (
            <motion.div
              className="absolute left-0"
              animate={{
                y: [fontSize, -fontSize * 0.75, -fontSize - 10],
                opacity: [0, 1, 0],
                transition: {
                  times: [0, 0.8, 1],
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 1.5 * (rotatingText.length - 1),
                  delay: 1.5 * index,
                },
              }}
            >
              <p
                style={{ fontSize: `${fontSize}px` }}
                className={`text-white font-bold`}
              >
                {item}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RotatingTextComponent;
