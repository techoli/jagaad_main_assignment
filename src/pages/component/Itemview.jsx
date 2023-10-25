import React, { useState } from "react";
import Pagelayout from "../../components/layouts/Pagelayout";
import imgbg from "../../images/imgbg.png";
import imgsm1 from "../../images/imgsm1.png";
import imgsm2 from "../../images/imgsm2.png";
import imgsm3 from "../../images/imgsm3.png";
import imgsm4 from "../../images/imgsm4.png";
import star from "../../images/star.png";
import star2 from "../../images/star2.png";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";

import Detail from "./Detail";
const sizeData = [
  { id: 1, size: "L" },
  { id: 2, size: "XL" },
  { id: 3, size: "XS" },
];
function Itemview() {
  const [imgmain, setimgmain] = useState(imgbg);
  const [smactive, setsmactive] = useState(0);
  const [activesize, setactivesize] = useState(0);
  const [val, setval] = useState(0);

  const doval = (v) => {
    if (v == "-" && val > 0) {
      setval(val - 1);
    } else if (v == "+") {
      setval(val + 1);
    }
  };
  const toglesize = (id) => {
    setactivesize(id);
  };

  const doSetimg = (id) => {
    if (id == 1) {
      setimgmain(imgsm1);
      setsmactive(1);
    }
    if (id == 2) {
      setimgmain(imgsm2);
      setsmactive(2);
    }
    if (id == 3) {
      setimgmain(imgsm3);
      setsmactive(3);
    }
    if (id == 4) {
      setimgmain(imgsm4);
      setsmactive(4);
    }
  };
  return (
    <Pagelayout>
      <div className="p-20">
        <div className="h-[60px] w-full flex gap-3 items-center mb-10">
          <p className="text-[#9F9F9F]">Home</p>
          <p>{">"}</p>
          <p className="text-[#9F9F9F]"> Shop</p>
          <p>{">"}</p>

          <div className="flex items-center justify-center border-l-2 border-[#9F9F9F] w-[150px]">
            <p>Asgaard sofa</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="h-[500px] flex-1 flex gap-5">
            <div className="w-[15%] flex flex-col gap-5">
              <div
                className={`h-[80px] bg-[#FFF9E5] cursor-pointer ${
                  smactive == 1 && `border border-[blue]`
                }`}
                onClick={() => doSetimg(1)}
              >
                <img src={imgsm1} />
              </div>
              <div
                className={`h-[80px] bg-[#FFF9E5] cursor-pointer ${
                  smactive == 2 && `border border-[blue]`
                }`}
                onClick={() => doSetimg(2)}
              >
                {" "}
                <img src={imgsm2} />
              </div>
              <div
                className={`h-[80px] bg-[#FFF9E5] cursor-pointer ${
                  smactive == 3 && `border border-[blue]`
                }`}
                onClick={() => doSetimg(3)}
              >
                {" "}
                <img src={imgsm3} />
              </div>
              <div
                className={`h-[80px] bg-[#FFF9E5] cursor-pointer ${
                  smactive == 4 && `border border-[blue]`
                }`}
                onClick={() => doSetimg(4)}
              >
                {" "}
                <img src={imgsm4} />
              </div>
            </div>
            <div className="w-[75%] bg-[#FFF9E5] rounded-[10px] flex items-center">
              <img src={imgmain} className="w-full h-[390px] object-cover" />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h1 className="text-[42px] font-[400]">Asgaard sofa</h1>
            <p className="text-[#9F9F9F] text-[24px]">Rs. 250,000.00</p>
            <div className="flex">
              <div className="flex gap-2 mr-3">
                {new Array(4).fill(0).map((item) => (
                  <img src={star} className="h-[20px] w-[20px]" />
                ))}
                <img src={star2} className="h-[20px] w-[20px]" />
              </div>
              <div className="border-l border-[#9F9F9F] pl-5">
                <p className="text-[#9F9F9F]">5 Customer Review</p>
              </div>
            </div>
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div>
              <p className="text-[#9F9F9F]">Size</p>
              <div className="flex gap-4">
                {sizeData.map((item, ind) => (
                  <button
                    key={item.id}
                    className={`p-2 rounded-[5px] w-[50px]  ${
                      activesize == item.id
                        ? `bg-[#FBEBB5] border border-[blue]`
                        : `bg-[#FAF4F4]`
                    }`}
                    onClick={() => toglesize(item.id)}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#9F9F9F]">Color</p>
              <div className="flex gap-3">
                <img src={c1} />
                <img src={c2} />
                <img src={c3} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-[8px] flex border border-[black] gap-3">
                <p className="cursor-pointer" onClick={() => doval("-")}>
                  -
                </p>
                <p>{val}</p>
                <p className="cursor-pointer" onClick={() => doval("+")}>
                  +
                </p>
              </div>
              <button className="p-3 rounded-[8px] border border-[black]">
                Add To Cart
              </button>
            </div>
            <hr className="border border-[#d1cece] mt-10" />
          </div>
        </div>
        <Detail />
      </div>
    </Pagelayout>
  );
}

export default Itemview;
