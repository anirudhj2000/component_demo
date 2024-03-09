"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "./useWindowDimensionHook";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const HoverGridBg = () => {
  const { height, width } = useWindowDimensions();
  let sqrSide =
    Math.sqrt((width * width) / 2) + Math.sqrt((height * height) / 2);
  const rows = new Array(Math.ceil(sqrSide / 60)).fill(1);
  const columns = new Array(Math.ceil(sqrSide / 60)).fill(1);

  return (
    <div className="max-h-screen w-full flex flex-col bg-[#000] overflow-hidden z-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]">
      <div
        className={`flex flex-col rotate-[45deg] -ml-[23vh] -mt-[27vw]`}
        style={
          {
            //   transform: `skewX(-45deg) skewY(25deg) scale(1) rotate(-45deg) translateZ(0)`,
          }
        }
      >
        {rows.map((row, index) => {
          {
            return (
              <div className="flex flex-row">
                {columns.map((col, index2) => {
                  return (
                    <motion.div
                      initial={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#000",
                      }}
                      whileHover={{
                        backgroundColor: "#ffffff" + "11",
                        transition: {
                          duration: 0.1,
                          type: "spring",
                        },
                        transitionEnd: {
                          borderColor: "#000",
                          display: "inline",
                        },
                      }}
                      animate={{
                        duration: 2,
                      }}
                      onHoverStart={(e: any) => {
                        console.log("e", e);
                      }}
                      className="z-40"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 60 60"
                        stroke="#fff"
                        className="pointer-events-none z-40 stroke-[0.5px]stroke-[#fff]"
                      >
                        <rect
                          width="100%"
                          height="100%"
                          className="stroke-[#c7c7c755]"
                        />
                      </svg>
                    </motion.div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HoverGridBg;
