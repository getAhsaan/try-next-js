import getSingleProduct from "@/utils/getSingleProduct";

const SingleProductPage = async ({ params }) => {
  const { id, title, price } = await getSingleProduct(params.id);
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default SingleProductPage;
