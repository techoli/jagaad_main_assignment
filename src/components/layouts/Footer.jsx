import React from "react";

function Footer({ currentPage, handlePageChange, btloop, totalPages }) {
  console.log(btloop);
  return (
    <div className="flex items-center justify-center gap-4 border">
      {currentPage >= 1 && (
        <button
          className="px-5 py-3 bg-[#FFF9E5] rounded-[3px]"
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}

      {btloop.map((item, ind) => (
        <span
          className={`px-5 py-3 rounded-[3px] ${
            ind + 1 == currentPage ? `bg-[#FBEBB5]` : `bg-[#FFF9E5]`
          }`}
        >
          {ind + 1}
        </span>
      ))}

      {currentPage < totalPages && (
        <button
          className="px-5 py-3 bg-[#FFF9E5] rounded-[3px]"
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Footer;
