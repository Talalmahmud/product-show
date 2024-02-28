import Checkout from "../../ui/Checkout";
import React from "react";

const page = ({ params }) => {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <Checkout total={params.slug} />
    </div>
  );
};

export default page;
