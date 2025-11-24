import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/img/backround.png";
import logo from "../assets/svg/fire.svg";
const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/s")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Swiper slidesPerView={1} loop={true}>
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="py-20  rounded-3xl"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="md:w-[700px]">
                <h2 className="font-semibold text-5xl leading-[112%] text-[#1f2533]">
                  {item.title}
                </h2>
                <p className="font-lexend font-light text-base leading-[175%] text-[#1f2533] my-4">
                  Be sure of our quality - the freshest batches of this season.
                  Non-GMO, Heirloom - our seeds were tested and have the best
                  germination ratings. Your easy growing experience is our
                  guarantee.
                </p>
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <img src={logo} alt="" />
                    <p className="font-semibold  text-[42px] text-[#1f2533] leading-[129%]">
                      {item.price}
                      <span className="underline pl-4 font-semibold text-2xl leading-[245%] text-[#70737c]">
                        $15.56
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-[#359740] cursor-pointer rounded-lg p-2 font-medium text-base leading-[178%] text-white">
                      Add to card
                    </button>
                    <button className="bg-white cursor-pointer rounded-lg p-2 font-medium text-base leading-[178%] text-[#359740]">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[300px] h-[300px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
