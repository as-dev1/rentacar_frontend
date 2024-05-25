import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Rent a car</Link>
      </div>
      <nav>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/cars" className="nav-link">Cars</Link>
      </nav>
    </header>
  );
};

export default Header;
