/** @format */

import { profilimg } from "../assets";
import Hobby from "./Hobby";

import { aboutMe } from "../constants";
import Title from "./UI/Title";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center md:flex md:flex-row md:gap-24 md:items-center ">
      <img src={profilimg} alt="Girl" className="w-[60%] md:w-[40%]" />
      <div className="center">
        <Title title="About Me" />
        <div className="grid gap-10 grid-cols-2 grid-rows-2">
          {aboutMe.map((hobby) => (
            <Hobby hobby={hobby} key={hobby.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
