import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import img from "../assets/svg/cart.svg";
import star from "../assets/svg/star.svg";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/s")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-6 py-10">
      {data.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <div className="border-2 border-[#efefef] rounded-xl p-3 hover:shadow-lg transition">
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded-lg"
            />

            <div className="flex items-center mt-5">
              <img src={star} alt="star" />
              <span className="ml-2 text-sm text-[#70737c]">(123)</span>
            </div>

            <h3 className="font-medium text-base mt-2 text-[#1f2533]">
              {item.title}
            </h3>

            <div className="flex justify-between items-center mt-3 text-[#1f2533]">
              <span className="text-2xl font-semibold">${item.price}</span>
              <button className="border p-2 rounded-lg">
                <img src={img} alt="cart" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
