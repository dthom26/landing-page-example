import React from "react";
import brackets from "../assets/svg/Brackets";

function Tagline({ className, children }) {
  return (
    <div
      className={`font-grotesk font-light text-xs tracking-tagline uppercase flex items-center ${
        className || ""
      }`}
    >
      {brackets("left")}
      <div className="mx-3 text-[#ADA8C3]">{children}</div>
      {brackets("right")}
    </div>
  );
}

export default Tagline;
