import React from "react";
import { Link } from "react-router-dom";
import lov from "../../images/lov.png";
import searc from "../../images/searc.png";
import cart from "../../images/cart.png";
import hum from "../../images/hum.png";

const navData = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <div className=" flex w-full h-[70px]  px-20 relative justify-center">
      <div className="flex items-center justify-center h-full gap-10">
        {navData.map((item) => (
          <Link to="/" key={item.id}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="absolute right-[100px] flex items-center h-full gap-5">
        <img src={hum} className="h-[28px] w-[28px]" />
        <img src={searc} className="h-[28px] w-[28px]" />
        <img src={lov} className="h-[28px] w-[28px]" />
        <img src={cart} className="h-[28px] w-[28px]" />
      </div>
    </div>
  );
}

export default Navbar;
