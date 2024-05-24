import axios from "axios";
import React, { useEffect, useState } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const result = await axios.get("http://localhost:8080/api/car");
    setCars(result.data);
  };

  const carElement = cars.map((car) => (
    <div key={car.id} className="car_card">
      <img className="car_img" src={car.imgPath} alt="" />
      <div className="car_stats">
        <h3>{car.brand}</h3>
        <h4>{car.model}</h4>
        <button className="car_type">{car.type.toLowerCase()}</button>
        <span className="car_price">Price: ${car.price_per_day} / day</span>
      </div>
    </div>
  ));

  return <main className="cars-wrapper">{carElement}</main>;
};

export default Cars;
