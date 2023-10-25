import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Itemview from "./pages/component/Itemview";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<Itemview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
