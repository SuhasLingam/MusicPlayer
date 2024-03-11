import React from "react";
import Search from "./search";

const player = () => {
  return (
    <>
      <div className="PlayerBody md:flex md:justify-center bg-yellow-500 md:w-1/3 md:h-3/4 md:rounded-3xl md:shadow-3xl">
        <Search />
      </div>
    </>
  );
};

export default player;
