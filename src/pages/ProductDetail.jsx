import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import star from "../assets/svg/star.svg";

const ProductDetail = () => {
  const { id } = useParams(); // 👈 ENG MUHIM
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://6905b069ee3d0d14c13361c0.mockapi.io/s/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!item) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-16">

      <Link to="/product" className="text-green-600 mb-6 inline-block">
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={item.img}
          alt={item.title}
          className="w-full rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-semibold text-[#1f2533]">
            {item.title}
          </h1>

          <div className="flex items-center mt-4">
            <img src={star} alt="" />
            <span className="ml-2 text-sm text-[#70737c]">(123)</span>
          </div>

          <p className="text-3xl font-bold mt-6">
            ${item.price}
          </p>

          <p className="mt-4 text-gray-600">
            This is product detail page. Now it works correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
