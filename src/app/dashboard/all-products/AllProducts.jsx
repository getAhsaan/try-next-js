"use client";

import Modal from "@/components/HomePage/Modal";
import { useRef, useState } from "react";
import ManageSingleProduct from "../manage-product/ManageSingleProduct";
import useProducts from "@/hooks/useProducts";

const AllProducts = () => {
  const { products, error, isLoading, isValidating, mutate } = useProducts();
  const modalRef = useRef(null);
  const [updateData, setUpdateDAta] = useState(null);

  const openModal = (product) => {
    setUpdateDAta(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateDAta(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = {
      title,
      price,
    };
    if (title && price) {
      const res = await fetch(
        `http://localhost:5000/products/${updateData?.id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      console.log(result);
      mutate();
      form.reset();
      closeModal();
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    mutate();
  };

  return (
    <div>
      {isLoading && (
        <h1 className=" text-center text-2xl font-semibold">Loading...</h1>
      )}
      {!isLoading && (
        <table
          className={` border-collapse w-full ${
            isValidating ? "opacity-50" : "opacity-100"
          }`}
        >
          <thead>
            <tr>
              <th className=" border border-slate-400">Title</th>
              <th className=" border border-slate-400">Price</th>
              <th className=" border border-slate-400">Update</th>
              <th className=" border border-slate-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageSingleProduct
                openModal={openModal}
                key={product.id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AllProducts;
