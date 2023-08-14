import getAllProducts from "@/utils/getAllProducts";
import React from "react";
import SingleProduct from "./SingleProduct";

const ProductPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);
  return (
    <div>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
