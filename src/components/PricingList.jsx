import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

function PricingList() {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, id) => (
        <div
          key={id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-[#0E0C15] border border-[#252134] rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"
        >
          <h4 className="text-[2rem] leading-normal mb-4">{item.title}</h4>
          <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-[#FFFFFF]/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[2rem] leading-normal md:text-[2.5rem] ">
                  $
                </div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:info@brainwave.pro"}
            white={!!item.price}
          >
            {item.price ? "Get stared" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                className="flex items-start py-5 border-t border-[#252134]"
                key={index}
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="font-light text-[0.875rem] leading-6 md:text-base ml-4">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PricingList;
