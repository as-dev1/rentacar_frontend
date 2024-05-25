import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to=".">Rent a car</Link>
      </div>  
      <nav>
        <NavLink to="about" className={({isActive}) => isActive ? "active-page" : null}>
          About
        </NavLink>
        <NavLink to="cars" className={({isActive}) => isActive ? "active-page" : null}>
          Cars
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
