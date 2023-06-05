/** @format */

import React from "react";
import { CircleIcon } from "./";
import styles from "../style";

const Service = ({ service }) => {
  const { icon, title, descreption } = service;
  return (
    <div className="bg-white relative sm:px-8 sm:py-12 rounded py-12 px-14">
      <CircleIcon icon={icon} isService={true} />
      <h1 className={`${styles.heading2} text-center sm:pt-6 pt-2`}>{title}</h1>
      <p className={`${styles.paragraph}  text-center text-[16px] `}>
        {descreption}
      </p>
    </div>
  );
};

export default Service;
