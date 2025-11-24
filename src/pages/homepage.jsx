import React from "react";
import Banner from "../components/Banner";
import Title from "../components/title";
import Product from "../components/product";
import Filter from "../components/filter";
import Products from "../components/Products";
import Blog from "../components/Blog";

const Homepage = () => {
  return (
    <main>
      <Banner />
      <Title />
      <Product />
      <Filter />
      <Products />
      <Blog />
    </main>
  );
};

export default Homepage;
