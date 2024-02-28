"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import CartButton from "./CartButton";
import { products } from "../lib/product";
import Input from "./Input";

const MainPage = () => {
  const [productList, setProductList] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [total, setTotal] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const totalPrice = (productList) => {
    let t = 0;
    productList.map((item) => {
      const d = item.quantity * item.price;
      t += d;
    });

    setTotal(t);
  };

  const updateData = () => {
    const localData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    setSelectedProduct(localData);
  };

  useEffect(() => {
    totalPrice(selectedProduct);
  }, [selectedProduct]);
  const addProductTOLocalhost = (item) => {
    if (localStorage.getItem("cartItem") !== null) {
      const localData = JSON.parse(localStorage.getItem("cartItem") || "[]");
      const itemIndex = localData.findIndex((p) => p.id === item.id);

      if (itemIndex !== -1) {
        const q = localData[itemIndex].quantity + 1;
        localData[itemIndex] = {
          ...item,
          quantity: q,
        };
      } else {
        // Fix: Initialize price based on item's price
        const product = {
          ...item,
          quantity: 1,
        };
        localData.push(product);
      }

      localStorage.setItem("cartItem", JSON.stringify(localData));
      updateData();
    } else {
      const product = {
        ...item,
        quantity: 1,
        // Fix: Initialize price based on item's price
      };
      localStorage.setItem("cartItem", JSON.stringify([product]));
      updateData();
    }
  };

  const removeProductTOLocalhost = (item) => {
    if (localStorage.getItem("cartItem") !== null) {
      const localData = JSON.parse(localStorage.getItem("cartItem") || "[]");
      const itemIndex = localData.findIndex((p) => p.id === item.id);

      if (itemIndex !== -1 && localData[itemIndex].quantity > 1) {
        localData[itemIndex] = {
          ...item,
          quantity: localData[itemIndex].quantity - 1,
        };
      }

      localStorage.setItem("cartItem", JSON.stringify(localData));
      updateData();
    }
  };

  const deleteCartItem = (p) => {
    const localData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    const filterData = localData.filter((item) => item.id !== p.id);
    localStorage.setItem("cartItem", JSON.stringify(filterData));

    updateData();
  };

  useEffect(() => {
    const filterProducts = products.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProductList(filterProducts);
  }, [searchInput]);

  useEffect(() => {
    updateData();
  }, []);

  useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);
  return (
    <div>
      <div className=" flex flex-col">
        <div className=" pl-[8px] sm:pl-[20px]">
          <Input searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
        <div className=" flex ">
          <div className=" w-full items-center justify-center xl:w-[1200px] flex flex-wrap">
            {productList.map((item, index) => (
              <Card
                key={index}
                product={item}
                addProduct={addProductTOLocalhost}
              />
            ))}
          </div>
          <div className=" hidden xl:block sticky top-2 z-10">
            <Cart
              productList={selectedProduct}
              addProduct={addProductTOLocalhost}
              removeProduct={removeProductTOLocalhost}
              updateData={updateData}
              deleteItem={deleteCartItem}
              total={total}
            />
          </div>
        </div>
      </div>

      <CartButton
        productList={selectedProduct}
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle && (
        <div className=" fixed xl:hidden top-0 left-0 z-30 h-full w-full justify-center items-center bg-black/10">
          <Cart
            productList={selectedProduct}
            addProduct={addProductTOLocalhost}
            removeProduct={removeProductTOLocalhost}
            updateData={updateData}
            deleteItem={deleteCartItem}
            total={total}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
