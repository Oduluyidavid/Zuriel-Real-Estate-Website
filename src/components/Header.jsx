import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import tade from "../assets/images/tade22.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav
      className={`${darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"} flex 
       justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      <div id="tade">
        <img
          src={tade}
          alt="company logo"
          className="lg:w-[75px] w-[90px] dark:invert"
        />
      </div>
      {/* Desktop menu starts here */}
      <ul className="hidden lg:flex gap-8">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold
           cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/*mobile menu starts here*/}
      <div className="lg:hidden " onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full  bg-slate-800 p-4 absolute top-[70px] left-0 z-40`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3
                 rounded-lg hover:bg-blue-600 hover:text-black w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onSetActive={(to) => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <a
          href="tel:2348108679999"
          className="flex justify-center items-center lg:gap-3 gap-1"
        >
          <FaPhoneAlt className="size-5 text-red-600" />
          <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold"></h1>
        </a>

        {/* <FaUserCircle className="size-6 text-red-600" /> */}
      </div>
    </nav>
  );
};

export default Header;
