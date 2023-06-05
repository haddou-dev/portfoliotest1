/** @format */

import React from "react";
import { socialMediaLinks } from "../constants";
import { whiteLogo } from "../assets";
import styles from "../style";

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} flex-col sm:gap-4  gap-0 p-12  `}>
      <img
        src={whiteLogo}
        alt="Portfolio"
        className="h-[3.2rem] w-[10rem]"
      />
      <ul className="flex justify-center items-center sm:gap-12 gap-4 my-6 ">
        {socialMediaLinks.map((link) => (
          <li
            key={link.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-gray-300">
            <a href={link.link} className="brakets hover:text-white ">
              {link.id}
            </a>
          </li>
        ))}
      </ul>
      <p className="font-poppins font-normal cursor-pointer text-[16px] text-white ">
        2023 company x,all right reserved.
      </p>
    </div>
  );
};

export default Footer;
