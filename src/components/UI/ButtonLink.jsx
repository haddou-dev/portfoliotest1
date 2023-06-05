/** @format */

import React from "react";

const ButtonLink = (props) => {
  if (props.active) {
    return (
      <div className="sm:px-8 py-2 px-4  bg-secondary text-white text-[1rem] font-semibold">
        {props.children}
      </div>
    );
  }
  return (
    <div className="sm:px-8 py-2 px-4 bg-gray-300  hover:bg-secondary text-[1rem] hover:text-white font-semibold">
      {props.children}
    </div>
  );
};

export default ButtonLink;
