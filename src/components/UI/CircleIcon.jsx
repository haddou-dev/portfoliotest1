/** @format */

import React from "react";

const CircleIcon = ({ icon, isService }) => {
  if (isService) {
    return (
      <div className=" circle-icon-Service">
        <img src={icon} alt={icon} />
      </div>
    );
  }
  return (
    <div className=" circle-icon ">
      <img src={icon} alt={icon} />
    </div>
  );
};

export default CircleIcon;
