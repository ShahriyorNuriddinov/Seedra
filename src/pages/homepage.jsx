import React from "react";
import Banner from "../components/Banner";
import Title from "../components/title";
import Product from "../components/product";
import Filter from "../components/filter";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Grid from "../components/grid";
import About from "../components/swiper";

const Homepage = () => {
  return (
    <main>
      <Banner />
      <Title />
      <Product />
      <Filter />
      <Products />
      <Blog />
      <Grid />
      <About />
    </main>
  );
};

export default Homepage;
