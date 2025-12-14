import React from "react";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./pages/Allproduct";
import Homepage from "./pages/homepage";
import About from "./pages/Aboutss";
import Ourblog from "./pages/Ourblog";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourblog" element={<Ourblog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
