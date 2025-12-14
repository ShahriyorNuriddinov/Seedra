import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import img from "../assets/svg/cart.svg";
import star from "../assets/svg/star.svg";

const ProductDetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/s")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-6">
      {data.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="block"
        >
          <div className="border-[#efefef] border-2 rounded-xl p-3 hover:shadow-lg transition">
            
            <img
              src={item.img}
              className="w-full object-cover rounded-lg"
              alt={item.title}
            />

            <div className="flex items-center mt-5">
              <img src={star} alt="star" />
              <span className="font-normal text-sm leading-[178%] text-[#70737c]">
                (123)
              </span>
            </div>

            <h3 className="font-medium text-base leading-[156%] text-[#1f2533] mt-2">
              {item.title}
            </h3>

            <div className="flex items-center justify-between font-semibold text-[28px] text-[#1f2533] leading-[193%]">
              <span>${item.price}</span>

              <button
                onClick={(e) => e.preventDefault()}
                className="rounded-lg cursor-pointer flex items-center justify-center border border-solid border-[#efefef] p-2"
              >
                <img src={img} alt="cart" />
              </button>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductDetail;
