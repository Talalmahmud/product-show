"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Cart = ({
  productList,
  addProduct,
  updateData,
  removeProduct,
  deleteItem,
  total,
}) => {
  return (
    <div className="w-full  xl:w-[600px] h-full xl:h-[800px] border-2 px-2 rounded-none xl:rounded-md bg-white">
      <h2 className="text-xl font-bold flex justify-center items-center border-b-2 pt-[16px] xl:pt-0 ">
        Cart List
      </h2>
      <div className="flex flex-col justify-between h-full py-4">
        <div className="h-[90%] overflow-auto flex flex-col gap-2">
          {productList?.map((item, index) => (
            <div
              key={index}
              className=" w-full flex justify-between items-center mb-4 md:mb-2"
            >
              <div className="w-[20%] md:w-[40%]">
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {item.name}
                </p>
              </div>
              <div className="w-[30%] flex items-center justify-center md:justify-start">
                <div className="flex items-center gap-2 xl:gap-x-4">
                  <div
                    className="cursor-pointer flex items-center justify-center h-8 w-8 border-[1px] border-black rounded-md text-lg hover:text-white hover:bg-blue-700 select-none"
                    onClick={() => removeProduct(item)}
                  >
                    -
                  </div>
                  <p className="w-4">{item.quantity}</p>
                  <div
                    className="cursor-pointer flex items-center justify-center h-8 w-8 border-[1px] border-black rounded-md text-lg hover:text-white hover:bg-blue-700 select-none"
                    onClick={() => addProduct(item)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <p>${item?.price * item.quantity}</p>
              </div>
              <div className="w-[20%]">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => deleteItem(item)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
        <div className="h-[20%]">
          <div className="w-full h-[1px] bg-black my-2"></div>
          <div className="flex justify-between w-[75%] sm:w-[80%] items-center mb-2">
            <p>Total</p>
            <p className="text-xl font-bold w-[25%] sm:w-[22%]">=${total}</p>
          </div>
          <div className="flex justify-center items-center">
            <Link href={`/checkout/${total}`} className=" no-underline">
              <span className="w-[120px] h-[40px] flex items-center justify-center rounded-md bg-green-600 text-white">
                Checkout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
