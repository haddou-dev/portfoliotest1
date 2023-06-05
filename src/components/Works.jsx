/** @format */

import { ButtonLink, Title } from "../components";
import { Gallery } from "../constants";

const Works = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <Title title="My Works" />
      <ul className="mx-auto flex items-center sm:gap-10 justify-between mb-4 gap-6">
        <ButtonLink active="active">ALL</ButtonLink>
        <ButtonLink>SlideShow</ButtonLink>
        <ButtonLink>Video</ButtonLink>
        <ButtonLink>Image</ButtonLink>
      </ul>
      <div className="Gallery mx-auto md:w-[100%]">
        {Gallery.map((img, i) => (
          <img key={i} src={img} className="mb-2 w-[100%]" />
        ))}
      </div>
    </div>
  );
};

export default Works;
