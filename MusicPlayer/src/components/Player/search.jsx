import React from "react";
import { FaSearch } from "react-icons/fa";

const search = () => {
  return (
    <div>
      <div className="flex flex-row align-top gap-5 mt-7 h-max text-black">
        <input
          type="search"
          placeholder="Search Music"
          className="text-black rounded-3xl w-[400px] h-[50px] pl-5 pr-3"
        />
        <span className="flex items-center justify-center rounded-full bg-white p-3">
          <FaSearch size={25} />
        </span>
      </div>
    </div>
  );
};

export default search;
