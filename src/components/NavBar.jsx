/** @format */

import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Portfolio" className="h-[3.2rem] w-[10rem]" />
      {/* Links */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-primary ${
              index === navLinks.length - 1 ? "mr-0" : "mr-6"
            }`}>
            <a href={`#${link.id}`} className="brakets">{link.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}

      <div className="md:hidden flex flex-1 justify-end items-center z-10">
        <img
          src={toggle ? close : menu}
          alt="menu button"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
