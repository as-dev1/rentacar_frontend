import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <div className="logo">
          <Link to="/">Rent a car</Link>
        </div>
        <nav> 
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/cars" className="nav-link">Cars</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
