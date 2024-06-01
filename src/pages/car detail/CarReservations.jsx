import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const CarReservations = () => {
  const { id } = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    const result = await axios.get(`http://localhost:8080/api/reservation/car/${id}`);
    setReservations(result.data);
  };

  const reservationElement = reservations.map((reservation) => {
    const startDate = new Date(reservation.start_at);
    const endDate = new Date(reservation.end_at); 
    const formattedStartDate = startDate.toLocaleString('sr-RS'); 
    const formattedEndDate = endDate.toLocaleString('sr-RS'); 
    const diffTime = Math.abs(endDate - startDate); 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const pricePerDay = reservation.car.price_per_day; 
    const totalAmount = diffDays * pricePerDay; 
    
    return (
      <section key={reservation.id} className="container border-bottom py-2">
        <div className="d-flex">
          <FontAwesomeIcon icon={faUser} className="fs-4" />
          <p className="text-primary fw-bold px-2">
            {reservation.user.first_name} {reservation.user.last_name}
          </p>
        </div>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
          <strong className="px-2">From date: </strong>
          <span className="fst-italic">{formattedStartDate}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
          <strong className="px-2">To date: </strong>
          <span className="fst-italic">{formattedEndDate}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faSackDollar} className="text-success" />
          <strong className="px-2">Total amout: </strong>
          <span>{totalAmount} $</span>
        </p>
      </section>
    );
  });

  return (
    <section className="px-2">
      {reservations.length ? reservationElement : 
        <p className="text-center">Currently no reservations. 😞</p>
      }
    </section>
  );
};

export default CarReservations;
