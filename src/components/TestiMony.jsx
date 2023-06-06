/** @format */

import React from "react";
import { CircleIcon, Title } from "../components";
import { testimony } from "../assets";


const TestiMony = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pb-12">
      <Title title="TestiMony" />
      <CircleIcon icon={testimony} />
      <div className="flex flex-col justify-center items-center gap-2 mt-8 mb-12 w-[60%] ">
        <p className="font-poppins font-normal cursor-pointer text-[16px] text-gray-800 text-center	 ">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition.Le Lorem Ipsum est simplement du faux texte employé dans
          la composition.
        </p>
        <p className="font-poppins cursor-pointer text-[16px] text-gray-800 font-semibold">
          Mohamed Haddou , Web Developer
        </p>
      </div>
    </div>
  );
};

export default TestiMony;
