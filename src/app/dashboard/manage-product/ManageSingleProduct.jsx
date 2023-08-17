import React from "react";

const ManageSingleProduct = ({ product, openModal, handleDelete }) => {
  const { id, title, price, categoryId, imageUrl } = product;
  return (
    <tr className=" text-center w-full">
      <td className=" border border-slate-400 p-2 ">{title}</td>
      <td className=" border border-slate-400 ">{price}</td>
      <td className=" border border-slate-400 ">
        <button
          onClick={() => openModal(product)}
          className=" bg-blue-500 text-white px-2 py-3 rounded-md"
        >
          Update
        </button>
      </td>
      <td className=" border border-slate-400 ">
        <button
          onClick={() => handleDelete(id)}
          className=" bg-blue-500 text-white px-2 py-3 rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
