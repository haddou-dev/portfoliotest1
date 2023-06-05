/** @format */

import React from "react";
import { blogsList } from "../constants";

import Blog from "./Blog";
import { Title, Button } from "./";

const Blogs = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 ">
      <Title title="Blog" />
      <div className="flex justify-center items-center sm:gap-4 shrink flex-wrap gap-8 ">
        {blogsList.map((blog, i) => (
          <Blog key={i} item={blog} />
        ))}
      </div>
      <Button width="24rem">VIEW MORE</Button>
    </div>
  );
};

export default Blogs;
