import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";

const Grid = () => {
  return (
    <>
      <div className="container  flex items-center  justify-between flex-wrap">
        <div>
          <div className="flex  bg-[#EAF1EB] rounded-[12px] items-center justify-around">
            <div className="ml-9">
              <div className="flex">
                <p className=" font-normal text-[14px] leading-[178%] tracking-normal text-[#70737C]">
                  12.09.2021
                </p>
              </div>
              <h1 className=" font-lexend font-semibold text-[24px] leading-[31.5px] tracking-[-0.02em] text-[#1F2533]">
                How to plant spinach correctly in winter
              </h1>
              <p className="w-[370px] h-[75px]  text-[14px] leading-[178%] text-[#70737C]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <br />
              <button className="w-[106px] h-[51px] bg-[#FFFFFF] gap-[10px] rounded-[8px] border border-[#EFEFEF] px-[33px] py-[11px]">
                <p className="text-[16px] text-[#359740]">Read</p>
              </button>
            </div>
            <img className="ml-6" src={img} alt="" />
          </div>
          <div className="flex gap-8 mt-7">
            <div className=" h-[300px] bg-[#EFF2F8] rounded-xl">
              <div className="ml-9 mt-4">
                <div className="flex">
                  <p className=" font-normal text-[14px] leading-[178%] tracking-normal text-[#70737C]">
                    12.09.2021
                  </p>
                </div>
                <h1 className="max-w-[372px] max-h-[63px] font-lexend font-semibold text-[24px] leading-[31.5px] tracking-[-0.02em] text-[#1F2533]">
                  How to plant spinach correctly in winter
                </h1>
                <br />
                <button className="w-[106px] h-[51px] bg-[#FFFFFF] gap-2 rounded-lg border border-[#EFEFEF] px-[33px] py-[11px]">
                  <p className="text-[16px] text-[#359740]">Read</p>
                </button>
              </div>
              <img
                className="ml-[154px] mt-[-11px] rounded-[9px]"
                src={img2}
                alt=""
              />
            </div>
            <div className="w-[350px] h-[300px] bg-[#EFF2F8] rounded-xl">
              <div className="ml-9 mt-4">
                <div className="flex">
                  <p className=" font-normal text-[14px] leading-[178%] tracking-normal text-[#70737C]">
                    12.09.2021
                  </p>
                </div>
                <h1 className="max-w-[372px] max-h-[63px] font-lexend font-semibold text-[24px] leading-[31.5px] tracking-[-0.02em] text-[#1F2533]">
                  How to plant spinach correctly in winter
                </h1>
                <br />
                <button className="w-[106px] h-[51px] bg-[#FFFFFF] gap-2 rounded-lg border border-[#EFEFEF] px-[33px] py-[11px]">
                  <p className="text-[16px] text-[#359740]">Read</p>
                </button>
              </div>
              <img
                className="ml-[154px] mt-[-11px] rounded-[9px]"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[350px]  h-[630px] bg-[#EFF2F8] rounded-xl">
          <div className="ml-9 mt-7">
            <div className="flex">
              <p className=" font-normal text-[14px] leading-[178%] tracking-normal text-[#70737C]">
                12.09.2021
              </p>
            </div>
            <h1 className="max-w-[372px] max-h-[63px] font-lexend font-semibold text-[24px] leading-[31.5px] tracking-[-0.02em] text-[#1F2533]">
              How to plant spinach correctly in winter
            </h1>
            <p className="w-[270px] h-[75px]  text-[14px] leading-[178%] text-[#70737C]">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <br />
            <button className="w-[106px] h-[51px] bg-[#FFFFFF] gap-2 rounded-lg border border-[#EFEFEF] px-[33px] py-[11px]">
              <p className="text-[16px] text-[#359740]">Read</p>
            </button>
          </div>
          <img className="ml-14 mt-[-29px]" src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
