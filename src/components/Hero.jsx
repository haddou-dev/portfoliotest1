/** @format */

import React, { Fragment } from "react";
import styles from "../style";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full bg-no-repeat bg-center relative bg-cover hero p-0 z-0 ">
      <h1
        className={`absolute top-[50%] p-0 sm:left-[20%] sm:p-0 px-12 translate-y-[-50%]  ${styles.big_heading} `}>
        I AM ALICE JOSEPH
      </h1>
    </div>
  );
};

export default Hero;
