"use client";
import React from "react";
import Image from "next/image";

interface ImageCardInterface {
  index: number;
  opacity: number;
  image: string;
}

const ImageCard = ({ index, opacity, image }: ImageCardInterface) => {
  return (
    <div
      key={index}
      className={`${
        opacity == 1 ? "opacity-10" : "opacity-100"
      } group relative h-[20vw] w-[35vw] overflow-hidden bg-neutral-200`}
    >
      <Image
        src={image}
        alt="Str"
        className="h-full w-full"
        layout="fill"
        style={{
          objectFit: "cover",
          opacity: opacity == 1 ? "opacity-70" : "opacity-100",
        }}
      />
    </div>
  );
};

export default ImageCard;
