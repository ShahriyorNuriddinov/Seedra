import React from "react";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./pages/Allproduct";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
