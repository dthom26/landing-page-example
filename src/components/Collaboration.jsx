import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants/index.js";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration.jsx";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => {
              return (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img width={24} height={24} src={check} alt="check" />
                    <h6 className="font-light text-[0.875rem] leading-6 md:text-base ml-5">
                      {item.title}
                    </h6>
                  </div>
                  {item.text && (
                    <p className="font-light text-[0.875rem] leading-6 md:text-base mt-3 text-[#757185] ">
                      {item.text}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-4 text-[#757185] md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-[#252134] rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-[#252134] rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-[linear-gradient(225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-[#0E0C15] rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                  key={app.id}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2em] h-[3.2rem] bg-[#15131D] border border-[#FFFFFF]/14 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
