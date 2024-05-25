import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadCar();
  }, [id]);

  const loadCar = async () => {
    const result = await axios.get(`http://localhost:8080/api/car/${id}`);
    setCar(result.data);
  };

  return (
    <div className="car-detail-wrapper">
      {car ? (
        <div className="car-detail">
          <div className="car-image">
            <img src={car.img_path} alt={`${car.brand} ${car.model}`} />
          </div>
          <div className="car-info">
            <h1>{car.brand} {car.model}</h1>
            <ul>
              <li><b>Year:</b> {car.year}</li>
              <li><b>Horsepower:</b> {car.hp} hp</li>
              <li><b>Seats:</b> {car.number_of_seats}</li>
              <li><b>Price:</b> ${car.price_per_day}/day</li>
            </ul>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default CarDetail;
