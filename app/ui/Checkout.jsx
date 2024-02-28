import React from "react";

const Checkout = ({ total }) => {
  return (
    <div className="w-full md:w-[400px] xl:w-[600px] h-full md:h-[700px] border-2 px-2 rounded-md bg-white">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">
        Checkout
      </h2>
      <div className=" h-[2px] w-full bg-black"></div>
      <div className="flex flex-col h-full py-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Mr. Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Badda ,Dhaka "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="creditCard"
            className="block text-sm font-medium text-gray-700"
          >
            Credit Card Number
          </label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="123"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Total</p>
          <p className="text-xl font-bold">=${total}</p>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-[120px] h-[40px] flex items-center justify-center rounded-md bg-green-600 text-white">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
