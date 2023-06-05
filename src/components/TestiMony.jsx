/** @format */

import React from "react";
import { CircleIcon, Title } from "../components";
import { testimony } from "../assets";

const TestiMony = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Title title="TestiMony" />
      <CircleIcon icon={testimony} />
      <div className="flex flex-col justify-center items-center gap-2 mt-8">
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition.
        </p>
        <h4>Web Developer</h4>
      </div>
    </div>
  );
};

export default TestiMony;
