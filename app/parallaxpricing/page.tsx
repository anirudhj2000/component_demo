"use client";
import React from "react";
import ParallaxPricingComponent from "@/components/ParallaxPricing";

const ParallaxPricingDemo = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col h-[80vh] items-center w-full relative z-0">
        <div className="flex flex-col justify-center items-center h-[70vh] w-8/12">
          <p className="text-[54px] font-bold text-white text-center">
            Scroll to view parallax effect
          </p>
        </div>
      </section>
      <ParallaxPricingComponent />
    </div>
  );
};

export default ParallaxPricingDemo;
