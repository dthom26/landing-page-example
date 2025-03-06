import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-[#474060]/40 backdrop-blur border border-[#43435C]/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base ">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden"
              >
                <img
                  className="w-full"
                  width={20}
                  height={20}
                  src={item}
                  alt="item"
                />
              </li>
            ))}
          </ul>
          <div className="font-light text-[0.875rem] leading-6 md:text-base text-[#6C7275]">
            1m ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
