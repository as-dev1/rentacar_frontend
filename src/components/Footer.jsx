import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Instagram, TwitterX } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Rent a Car</h5>
            <p>Providing quality rental cars at affordable prices.</p>
          </div>
          <div className="col-md-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><Link to="." className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="cars" className="text-light text-decoration-none">Cars</Link></li>
              <li><Link to="addcar" className="text-light text-decoration-none">Add Car</Link></li>
              <li><Link to="about" className="text-light text-decoration-none">About</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" className="text-light">
                  <Facebook className="fs-4" />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" className="text-light">
                    <TwitterX className="fs-4"/>
                </a>
              </li>
              <li className="me-3">
                <a href="https://instagram.com" className="text-light">
                  <Instagram className="fs-4"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Rent a Car. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
