import React from "react";

const Product = () => {
  return (
    <>
      <div className="container flex items-center justify-between">
        <h2 className="font-semibold text-4xl leading-[150%] text-[]">
          Our products.
        </h2>
        <button className="border font-medium text-base leading-[178%] text-[#359740] border-solid cursor-pointer  border-[#efefef] rounded-lg p-2">
          View all (12)
        </button>
      </div>
    </>
  );
};

export default Product;
