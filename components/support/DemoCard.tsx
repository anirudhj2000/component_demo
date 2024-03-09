"use client";
import React from "react";

interface AboutCardInterface {
  index: number;
  opacity: number;
  title: string;
  description: string;
}

const DemoCard = ({
  index,
  opacity,
  title,
  description,
}: AboutCardInterface) => {
  return (
    <div
      key={index}
      className={`group ${
        opacity == 1 ? "opacity-100" : "opacity-[0.15]"
      } relative overflow-hidden z-0 border-[1px] border-[#5581d4] opacity-[70%] rounded-md shadow-[0_8px_48px_4px_rgba(85,129,212,0.5)] `}
    >
      <div className="flex flex-col p-8 justify-center h-full w-full text-wrap">
        <p className="text-[1.5rem] font-bold text-white">{title}</p>
        <p className="text-mg text-white mt-8 text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default DemoCard;
