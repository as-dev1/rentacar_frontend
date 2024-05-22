import React from "react";
import About from "./About";
import Home from "./Home";
import "./style.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
