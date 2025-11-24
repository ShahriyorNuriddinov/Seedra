import React from "react";
import img from "../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Product from "../pages/Allproduct";
import Homepage from "./../pages/homepage";
import About from "../pages/Aboutss";
import Ourblog from "./../pages/Ourblog";

const Header = () => {
  const links = [
    { id: "1", name: "ALL PRODUCTS", url: "/Product" },
    { id: "2", name: "ABOUT SEEDRA", url: "/About" },
    { id: "3", name: "OUR BLOG", url: "/Ourblog" },
    { id: "4", name: "CONTACTS", url: "#" },
  ];

  return (
    <header
      className="sticky top-0 w-full z-50"
      style={{
        boxShadow: "0 4px 12px 0 rgba(207, 207, 207, 0.25)",
        background: "var(--white)",
      }}
    >
      <div className="container bg-white grid grid-cols-[2fr_1fr] items-center py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/Homepage">
            <img src={img} alt="Logo" />
          </NavLink>

          <ul className="flex gap-9">
            {links.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                className="font-lexend text-sm text-[#70737c] px-3 border-r border-[#efefef]"
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-5 pl-4">
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/">
              <CiFacebook />
            </a>
          </span>

          <form className="flex items-center border-2 border-[#efefef] rounded-full p-1">
            <button type="submit">
              <CiSearch />
            </button>
            <input
              className="outline-none pl-2"
              type="search"
              placeholder="Search"
            />
          </form>

          <span className="flex items-center gap-5">
            <NavLink to="/">
              <FaRegHeart className="text-green-500" />
            </NavLink>
            <NavLink to="/">
              <SlBasket className="text-green-500" />
            </NavLink>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
