"use client";
import React from "react";
import RotatingTextComponent from "@/components/RotatingTextComponent";

const Rotatingtextdemo = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <div className="absolute z-50 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <RotatingTextComponent
        constantText="Coin landed on "
        rotatingText={["heads", "tails"]}
      />
    </div>
  );
};

export default Rotatingtextdemo;
