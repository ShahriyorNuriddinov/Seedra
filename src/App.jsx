import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/homepage";
import ProductDetail from './pages/ProductDetail';
import About from "./pages/Aboutss";
import Ourblog from "./pages/Ourblog";
import Products from "./components/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="product" element={<Products />} />
        <Route path="Product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="ourblog" element={<Ourblog />} />
        <Route path="*" element={<div className="text-center py-20"><h2>Sahifa topilmadi</h2></div>} />
      </Route>
    </Routes>
  );
};

export default App;