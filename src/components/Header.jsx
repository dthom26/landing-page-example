import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants/index.js";
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false); // once you click on something from the MenuSvg it will close the menu.
    // That way you don't have to click the close button.
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#252134] lg:bg-[#0E0C15]/90 lg:backdrop-blur-sm ${
        openNavigation
          ? "bg-[#0E0C15]"
          : "bg-[rgb(14_12_21_/_0.9)] backdrop:backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={handleClick}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-[#AC6AFF] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-white"
                    : "lg:text-[rgba(255,255,255,0.5)]"
                } lg:leading-5 lg:hover:text-white xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="font-code text-xs font-bold uppercase tracking-wider hidden mr-8 text-white/50 transition-colors hover:text-white lg:block"
        >
          New account
        </a>
        <Button className="flex max-lg:hidden" href="#login">
          Sign in
        </Button>

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden cursor-pointer"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}
