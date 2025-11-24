import React from "react";
import img from "../assets/svg/svg.svg";
import img2 from "../assets/svg/svg2.svg";
import img3 from "../assets/svg/svg3.svg";
import img4 from "../assets/svg/svg4.svg";
import img5 from "../assets/svg/svg5.svg";
import img6 from "../assets/svg/svg6.svg";

const Filter = () => {
  const [active, setActive] = React.useState(null);

  const api = [
    { id: 1, name: "All", img },
    { id: 2, name: "BUNDLES", img: img2 },
    { id: 3, name: "HERBS", img: img3 },
    { id: 4, name: "VEGETABLES", img: img4 },
    { id: 5, name: "FRUITS", img: img5 },
    { id: 6, name: "SUPPLIES", img: img6 },
    { id: 7, name: "FLOWERS", img: img6 },
  ];

  return (
    <div className="py-8 container flex items-center justify-between">
      {api.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`font-normal border-2 border-solid p-3 gap-1 rounded-lg font-lexend flex items-center text-sm leading-[178%] cursor-pointer
            ${
              active === item.id
                ? "bg-green-400 text-white"
                : "border-[#efefef] text-[#1f2533]"
            }
          `}
        >
          <img src={item.img} alt="" />
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Filter;
