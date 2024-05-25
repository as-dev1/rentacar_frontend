import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

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
      <Link to=".." relative="path" className="back-to-all"> 
      <FontAwesomeIcon icon={faArrowLeftLong} /> 
        &nbsp;Back to all cars
      </Link>
      {car ? (
        <div className="car-detail">
          <div className="car-image">
            <img src={car.img_path} alt={`${car.brand} ${car.model}`} />
          </div>
          <div className="car-info">
            <h1>{car.brand} {car.model}</h1>
            <ul>
              <li><strong>Year:</strong> {car.year}</li>
              <li><strong>Horsepower:</strong> {car.hp} hp</li>
              <li><strong>Seats:</strong> {car.number_of_seats}</li>
              <li><strong>Price:</strong> ${car.price_per_day}/day</li>
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
