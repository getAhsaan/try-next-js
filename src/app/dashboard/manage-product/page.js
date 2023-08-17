import getAllProducts from "@/utils/getAllProducts";
import ManageProduct from "./ManageProduct";

export const metadata = {
  title: "Manage Product | Dashboard | Next Hero",
  description: "next hero desc",
};

const ManageProductPage = async () => {
  const products = await getAllProducts();
  return (
    <div className=" w-full mt-10">
      <h1 className=" mb-5 font-semibold text-2xl">Manage Product </h1>
      <ManageProduct products={products} />
    </div>
  );
};

export default ManageProductPage;
