/** @format */

import { Fragment } from "react";
import styles from "../../style";


const Title = ({ title }) => {
  return (
    <div className={`${styles.flexCenter} flex-col mt-8 mb-24 `}>
      <h1 className={`${styles.title} my-2 `}>{title}</h1>
      <hr className="border-t-2 border-gray-800 w-[10%] " />
    </div>
  );
};

export default Title;
