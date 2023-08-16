import PopularProducts from "@/components/HomePage/PopularProducts";
import Categories from "@/components/HomePage/categories";
import { Suspense } from "react";

export const metadata = {
  title: "Home | Next Hero",
  description: "Next Hero Homepage",
};

export const revalidate = 5;

const HomePage = () => {
  return (
    <main className="container mx-auto my-4">
      {/* <h1>Home Page</h1> */}
      <Categories />
      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-2xl">Please Wait...</h1>
        }
      >
        <PopularProducts />
      </Suspense>
    </main>
  );
};
export default HomePage;
