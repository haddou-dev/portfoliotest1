/** @format */

import React from "react";
import styles from "../style";
import { Button } from "./";

const Inputs = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 sm:px-8 px-4 sm:w-[50%] w-full">
      <input
        type="text"
        placeholder="Name"
        className={`${styles.inputsStyle}`}
      />
      <input
        type="text"
        placeholder="E-Mail"
        className={`${styles.inputsStyle}`}
      />
      <textarea
        type="text"
        placeholder="Your Message"
        rows="5"
        className={`${styles.inputsStyle}`}
      />
      <Button width="100%">Send Message</Button>
    </div>
  );
};

export default Inputs;
