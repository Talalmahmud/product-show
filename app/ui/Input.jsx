"use client";

import React from "react";

const Input = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <input
        type="text"
        value={searchInput || ""}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search your product"
        className=" border-[1px] w-[343px] sm:w-[600px] rounded-md outline-none p-2"
        autoFocus
      />
    </>
  );
};

export default Input;
