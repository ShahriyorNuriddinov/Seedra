import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Homepage from "./pages/homepage";
import ProductList from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/Aboutss";
import Ourblog from "./pages/Ourblog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="product" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="ourblog" element={<Ourblog />} />
      </Route>
    </Routes>
  );
};

export default App;
