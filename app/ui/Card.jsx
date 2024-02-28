"use client";

import Image from "next/image";
import React from "react";

const Card = ({ product, addProduct }) => {
  return (
    <div className=" h-[250px] w-[343px] sm:w-[150px] border-2 border-white hover:border-black/10 rounded-md bg-white p-2">
      <Image src={"/p1.png"} alt="" height={100} width={150} priority />
      <p className=" text-xl">{product?.name}</p>
      <p>
        Price: <span className=" text-sm">${product?.price}</span>
      </p>
      <button
        className=" hover:text-white bg-blue-500 rounded-[4px] px-[4px] py-[2px]"
        onClick={() => addProduct(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
