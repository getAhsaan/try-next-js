import Categories from "@/components/HomePage/categories";

export const metadata = {
  title: "Home | Next Hero",
  description: "Next Hero Homepage",
};

const HomePage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Categories /> 
    </main>
  );
};
export default HomePage;
