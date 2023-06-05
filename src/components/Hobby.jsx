/** @format */

import React from "react";
import styles from "../style";
import { camera } from "../assets";
const Hobby = ({ hobby }) => {
  const { icon, title, descreption } = hobby;
  return (
    <div>
      <div className="flex gap-4 shrink-0 items-center ">
        <img src={icon} alt={title} className="h-[42px] w-[42px]" />
        <h1 className={`${styles.heading2}`}>{title}</h1>
      </div>
      <p className={`${styles.paragraph} pr-10`}>{descreption}</p>
    </div>
  );
};

export default Hobby;
