import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import img25 from "../assets/svg/icon.svg";

const About = () => {
  return (
    <>
      <h1 className="text-[36px] text-[#1F2533] mt-10 font-semibold text-center">
        What our clients say
      </h1>

      <div className="w-full flex justify-center py-20 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          slidesPerView={2.3}
          spaceBetween={40}
          loop={true}
        >
          <SwiperSlide>
            <div className="w-[540px] h-[347px] p-9 bg-white rounded-[12px] border border-[#EFEFEF] shadow-sm mx-auto">
              <div className="flex gap-5">
                <img src={img25} alt="" />
                <div>
                  <h2 className="font-medium text-[18px] text-[#1F2533]">
                    Carla Samantoes-Diego
                  </h2>
                  <p className="text-[14px] text-[#70737C]">12.09.2021</p>
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[28px]">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[540px] h-[347px] p-9 bg-white rounded-[12px] border border-[#EFEFEF] shadow-sm mx-auto">
              <div className="flex gap-5">
                <img src={img25} alt="" />
                <div>
                  <h2 className="font-medium text-[18px] text-[#1F2533]">
                    Carla Samantoes-Diego
                  </h2>
                  <p className="text-[14px] text-[#70737C]">12.09.2021</p>
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[28px]">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[540px] h-[347px] p-9 bg-white rounded-[12px] border border-[#EFEFEF] shadow-sm mx-auto">
              <div className="flex gap-5">
                <img src={img25} alt="" />
                <div>
                  <h2 className="font-medium text-[18px] text-[#1F2533]">
                    Carla Samantoes-Diego
                  </h2>
                  <p className="text-[14px] text-[#70737C]">12.09.2021</p>
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[28px]">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="prev-btn absolute left-10 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full z-50">
          ‹
        </button>
        <button className="next-btn absolute right-10 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full z-50">
          ›
        </button>
      </div>
    </>
  );
};

export default About;
