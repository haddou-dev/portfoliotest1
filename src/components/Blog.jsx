/** @format */

import React from "react";
const Blog = ({ item }) => {
  const { image, category, title, descreption } = item;
  // console.log(item)

  return (

    <div className="flex justify-center shrink">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 pb-4 rounded-lg">
          <img src={image} alt={title} className="w-full rounded-t-lg" />
          <div className="py-6 px-8 rounded-lg bg-white">
            <h1 className="text-gray-700 font-bold text-[1.2rem] mb-3 hover:text-gray-900 hover:cursor-pointer">
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </h1>
            <p className="text-gray-700 tracking-wide">
              {descreption}
            </p>
          </div>
          <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
            <span className="text-md">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
