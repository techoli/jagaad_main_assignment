import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Pagelayout({ children }) {
  return (
    <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto]">
      <Navbar />
      {children}
    </div>
  );
}

export default Pagelayout;
