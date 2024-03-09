"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

let paths = [
  {
    title: "Rotating Text",
    path: "rotatingtextdemo",
  },
  {
    title: "Hover Grid Bg",
    path: "hovergridbg",
  },
  {
    title: "Sticky scroll (Vertical + Horizaontal)",
    path: "stickyscrolldual",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-2xl">Demo Components</p>
      <div className="flex flex-col mt-8">
        {paths.map((item, index) => {
          return (
            <a
              onClick={() => {
                router.push(item.path);
              }}
            >
              {index + 1}
              {". "}
              {item.title}
            </a>
          );
        })}
      </div>
    </main>
  );
}
