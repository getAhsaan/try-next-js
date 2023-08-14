import Categories from "@/components/HomePage/categories";

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
    </main>
  );
};
export default HomePage;
