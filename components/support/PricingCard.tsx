import React from "react";

const PricingCard = ({ obj }: { obj: any }) => {
  return (
    <div className="flex flex-col items-center">
      {" "}
      {obj.name == "Pro" ? (
        <div className="bg-blue-700 rounded-[48px] w-4/12 px-4 py-2 -mt-4">
          <p className="text-white text-[10px]">Most Popular</p>
        </div>
      ) : (
        <div className="mt-4" />
      )}
      <div className="flex flex-col w-full h-full px-4">
        <div className="flex flex-col ">
          <p className="text-md flex flex-row font-bold text-white">
            {obj.name}
          </p>
          <div className="flex flex-row items-baseline">
            {" "}
            <p className="text-2xl text-white mr-2">{obj.price}</p>
            {obj.name != "Custom" ? (
              <p className="text-sm text-[#ffffff99]">per user / month</p>
            ) : null}
          </div>
          <p className="text-white text-[10px] mt-1">{obj.description}</p>
        </div>
        <div className="mt-8">
          {obj.features.map((item: any, index: any) => {
            return (
              <div key={index} className="flex flex-row items-start mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[16px] mt-[2px] h-[16px] text-green-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                <p className="text-white text-[14px]">{item}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-4 w-8/12 ml-[10%] bg-[#072657] flex justify-center py-2 rounded-md">
          <p className="text-white text-[12px]">{obj.buttonTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
