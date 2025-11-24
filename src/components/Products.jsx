import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="container mx-auto grid grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.id} className="border-[#efefef] border-2 rounded-xl p-3">
          <img src={item.img} className="w-full  object-cover rounded-lg" />
          <div className="flex items-center mt-5">
            <img src={star} className="" alt="" />
            <span className="font-normal text-sm leading-[178%] text-[#70737c]">
              (123)
            </span>
          </div>

          <h3 className="font-medium text-base leading-[156%] text-[#1f2533] mt-2">
            {item.title}
          </h3>

          <div className="flex items-center justify-between font-semibold text-[28px] text-[#1f2533] leading-[193%]">
            <span> ${item.price}</span>
            <button className="rounded-lg cursor-pointer flex items-center justify-center border border-solid border-[#efefef] p-2">
              <img src={img} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
