import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const active = {
    textDecoration: "underline",
    fontWeight: "bold"
  }

  return (
    <header className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4 text-light" to=".">
          Rent a car
        </Link>
        <div className={`menu-btn ${!isCollapsed ? "open" : ""}`} onClick={toggleNavbar}>
          <div className="menu-btn-burger"></div>
        </div>
        <nav className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink to="cars" className="nav-link fs-5 text-light" style={({ isActive }) => isActive ? active : null}>
                Cars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="addcar" className="nav-link fs-5 text-light" style={({ isActive }) => isActive ? active : null}>
                Add Car
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="users" className="nav-link fs-5 text-light" style={({ isActive }) => isActive ? active : null}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
