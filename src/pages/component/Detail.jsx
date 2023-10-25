import React from "react";
import linkedin from "../../images/linkedin.png";
import fb from "../../images/fb.png";
import twiter from "../../images/twitter.png";

function Detail() {
  return (
    <div className="flex w-full mt-10">
      <div className="flex-1"></div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex gap-3 ">
          <div className=" flex justify-between w-[100px]">
            <p className="text-[#9F9F9F]">SKU</p>
            <p className="text-[#9F9F9F]">:</p>
          </div>
          <p className="text-[#9F9F9F]">SS001</p>
        </div>
        <div className="flex gap-3 ">
          <div className=" flex justify-between w-[100px]">
            <p className="text-[#9F9F9F]">Category</p>
            <p className="text-[#9F9F9F]">:</p>
          </div>
          <p className="text-[#9F9F9F]">Sofas</p>
          <p></p>
        </div>
        <div className="flex gap-3 ">
          <div className=" flex justify-between w-[100px]">
            <p className="text-[#9F9F9F]">Tags</p>
            <p className="text-[#9F9F9F]">:</p>
          </div>
          <p className="text-[#9F9F9F]">Sofa, Chair, Home, Shop</p>
          <p></p>
        </div>
        <div className="flex gap-3 ">
          <div className=" flex justify-between w-[100px]">
            <p className="text-[#9F9F9F]">Share</p>
            <p className="text-[#9F9F9F]">:</p>
          </div>
          <div className="flex gap-3">
            <img src={linkedin} className="w-[20px] h-[20px]" />
            <img src={fb} className="w-[20px] h-[20px]" />
            <img src={twiter} className="w-[20px] h-[20px]" />
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
