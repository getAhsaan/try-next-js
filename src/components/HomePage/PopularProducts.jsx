
import wait from "@/utils/wait";
import React from "react";

const PopularProducts = async () => {
  await wait();

  return (
    <div className="text-center text-4xl font-semibold">
      Popular Products
    </div>
  );
};

export default PopularProducts;
