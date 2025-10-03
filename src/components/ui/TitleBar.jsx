import React from "react";
import { AiFillHome } from "react-icons/ai";

function TitleBar({ title }) {
  return (
    <div className="w-full h-[50px] border-gray-700 flex items-center gap-2 px-4 rounded-xl bg-white shadow-sm">
      <AiFillHome className="text-md text-gray-700" />
      <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
    </div>
  );
}

export default TitleBar;
