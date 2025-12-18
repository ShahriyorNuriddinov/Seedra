import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import star from "../assets/svg/star.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/s")
      .then((res) => {
        const found = res.data.find(
          (product) => String(product.id) === String(id)
        );
        setItem(found);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!item) {
    return <div className="text-center py-20">Product not found</div>;
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
            <img src={star} alt="star" />
            <span className="ml-2 text-sm text-[#70737c]">(123)</span>
          </div>

          <p className="text-3xl font-bold mt-6">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
