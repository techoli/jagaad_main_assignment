import React from "react";
import Pagelayout from "../components/layouts/Pagelayout";
import Header from "./component/Header";
import Shopping from "./component/Shopping";

function Home() {
  return (
    <Pagelayout>
      <Header />
      <Shopping />
    </Pagelayout>
  );
}

export default Home;
