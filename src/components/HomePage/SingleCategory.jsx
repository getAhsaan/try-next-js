import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <div className=" border p-2 border-blue-500 m-2 rounded">
      <Link href={`/products?categoryId=${id}`}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default SingleCategory;
