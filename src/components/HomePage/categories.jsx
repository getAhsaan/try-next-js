import getAllCategories from "@/utils/getAllCategories";
import React from "react";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();
  return (
    <div>
      <h1>Categories</h1>
      <div className=" container mx-auto md:grid  grid-cols-4">
        {categories.map((category) => (
          <SingleCategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
