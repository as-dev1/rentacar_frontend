import React from "react";
import banner from "../img/banner.png";
import bmw from "../img/car_logo/bmw.png"
import ferrari from "../img/car_logo/ferrari.png"
import lamborghini from "../img/car_logo/lamborghini.png"
import maseratti from "../img/car_logo/maseratti.png"
import mercedes from "../img/car_logo/mercedes.png"
import tesla from "../img/car_logo/tesla.png"
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

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
    </main>
  );
};

export default Home;
