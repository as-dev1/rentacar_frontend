import React, { useEffect, useState } from "react";
import banner from "../img/banner.png";
import cars from "../img/cars.png";
import bmw from "../img/car_logo/bmw.png"
import ferrari from "../img/car_logo/ferrari.png"
import lamborghini from "../img/car_logo/lamborghini.png"
import maseratti from "../img/car_logo/maseratti.png"
import mercedes from "../img/car_logo/mercedes.png"
import tesla from "../img/car_logo/tesla.png"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const result = await axios.get(`http://localhost:8080/api/review`);
    setReviews(result.data);
  };

  const reviewElements = reviews.slice(2, 6).map((review) => (
    <div key={review.id} className="col-md-6 col-lg-3 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <PersonCircle className="fs-4" />
            <p className="text-primary fw-bold px-2 mb-0">
              {review.user.first_name} {review.user.last_name}
            </p>
          </div>
          <p>
            <span>{review.comment}</span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <main>
      <section>
        <img src={banner} className="w-100 banner-img" alt="banner" />
      </section>

      <section className="container py-4">
        <h3 className="text-center mb-4">Rent a car from top brands</h3>
        <section className="car-brand-wrapper">
          <div className="car-brand">
            <img src={ferrari} alt="ferrari"/>
            <p className="pt-2">Ferrari</p>
          </div>
          <div className="car-brand">
            <img src={lamborghini} alt="lamborghini"/>
            <p className="pt-2">Lamborghini</p>
          </div>
          <div className="car-brand">
            <img src={maseratti} alt="maseratti"/>
            <p className="pt-2">Maseratti</p>
          </div>
          <div className="car-brand">
            <img src={tesla} alt="tesla"/>
            <p className="pt-2">Tesla</p>
          </div>
          <div className="car-brand">
            <img src={bmw} alt="bmw"/>
            <p className="pt-2">BMW</p>
          </div>
          <div className="car-brand">
            <img src={mercedes} alt="mercedes"/>
            <p className="pt-2">Mercedes</p>
          </div>
        </section>
      </section>

      <section className="container py-4">
        <h3 className="text-center mb-4">What people say about our cars</h3>
        <div className="row">
          {reviewElements}
        </div>
      </section>

      <section className="position-relative">
        <img src={cars} className="w-100" alt="cars" />
        <Link 
          to="cars" 
          className="btn btn-lg btn-dark position-absolute custom-button" 
        >
          Find perfect car
        </Link>
      </section>
    </main>
  );
};

export default Home;
