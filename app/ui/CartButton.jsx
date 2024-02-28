"use client";

import React from "react";

const CartButton = ({ setToggle, toggle, productList }) => {
  return (
    <div
      className=" fixed xl:hidden z-50 text-[12px] right-[16px] bottom-2 rounded-full flex justify-center items-center h-[50px] w-[50px] text-white bg-orange-600"
      onClick={() => setToggle(!toggle)}
    >
      <div className=" flex justify-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div>
          <span>({productList.length})</span>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
