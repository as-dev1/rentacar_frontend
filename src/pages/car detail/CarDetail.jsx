import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const CarDetail = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();

  const active = {
    textDecoration: "underline",
    fontWeight: "bold"
  }

  useEffect(() => {
    loadCar();
  }, [id]);

  const loadCar = async () => {
    const result = await axios.get(`http://localhost:8080/api/car/${id}`);
    setCar(result.data);
  };

  const deleteCar = async () => {
    await axios.delete(`http://localhost:8080/api/car/${id}`)
    navigate("/cars")
  }

  return (
    <section className="car-detail-wrapper">
      <Link to=".." relative="path" className="back-to-all">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        &nbsp;Back to all cars
      </Link>
      {car ? (
        <section className="car-detail-container"> 
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
              <Link
                    className="btn btn-outline-primary"
                    to={"edit"}
                  >
                Edit
              </Link>
              <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCar(car.id)}
                  >
                    Delete
              </button>
            </div>
          </div>

          <nav className="car-detail-nav">
            <NavLink to="." end style={({ isActive }) => isActive ? active : null}>Details</NavLink>
            <NavLink to="reservations" style={({ isActive }) => isActive ? active : null}>Reservations</NavLink>
            <NavLink to="reviews" style={({ isActive }) => isActive ? active : null}>Reviews</NavLink>
          </nav>
          <Outlet context={{ car }}/>
        </section>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </section>
  );
};

export default CarDetail;
