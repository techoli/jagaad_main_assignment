import React, { useState } from "react";
import { shopingData } from "../../data/data";
import Footer from "../../components/layouts/Footer";
import { useNavigate } from "react-router-dom";

function Shopping() {
  const nav = useNavigate();
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(shopingData.length / itemsPerPage);
  console.log(totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = shopingData.slice(startIndex, endIndex);
  const [btloop, setbtloop] = useState(new Array(totalPages).fill([]));
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <div className="p-20">
        <div className="grid w-full grid-cols-4 gap-5">
          {currentPageData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-5 cursor-pointer"
              onClick={() => {
                nav("/view");
              }}
            >
              <img src={item.img} className=" h-[150px] w-full" />
              <div>
                {" "}
                <p className="text-[14px]">{item.title}</p>
                <h1 className="text-[18px]">{item.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        btloop={btloop}
        totalPages={totalPages}
      />
    </>
  );
}

export default Shopping;
