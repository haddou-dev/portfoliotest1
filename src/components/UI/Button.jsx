/** @format */

import React from "react";

const Button = (props) => {
  return (
    <button
      className={`sm:px-8 py-4 px-16 bg-secondary  hover:bg-blue-600 text-white text-[1rem] font-semibold rounded-md sm:my-10 mb-8 w-[${props.width}]`}>
      {props.children}
    </button>
  );
};

export default Button;
