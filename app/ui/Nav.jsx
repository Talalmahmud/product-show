"use client";
import Link from "next/link";
import React from "react";

const Nav = async () => {
  return (
    <div className=" bg-gray-600 text-gray-200 sticky top-0 left-0 z-10 ">
      <div className=" px-10 flex justify-between items-center w-full py-4">
        <Link href={"/"}>
          <h1 className=" text-white font-bold">PRODUCT</h1>
        </Link>
        <div className=" hidden md:flex gap-10">
          <Link href={"/"}>Home</Link>

          <Link href={"/signin"}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
