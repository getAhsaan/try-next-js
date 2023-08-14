import Navbar from "@/components/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className=" container mx-auto">Footer</footer>
    </div>
  );
};

export default WithLayout;
