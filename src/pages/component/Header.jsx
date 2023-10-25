import React from "react";
import img from "../../images/logoass.png";

function Header() {
  return (
    <div className="w-full h-[316px] headerbg flex flex-col items-center justify-center">
      <img src={img} className="h-[77px] w-[77px]" />
      <h1 className="text-[48px] font-[500]">Shop</h1>
      <div className="flex gap-2 cursor-pointer">
        <h1 className="text-[16px] ">Home</h1>
        <h1 className="text-[16px] ">{">"}</h1>
        <h1 className="text-[16px] font-[300]">Shop</h1>
      </div>
    </div>
  );
}

export default Header;
