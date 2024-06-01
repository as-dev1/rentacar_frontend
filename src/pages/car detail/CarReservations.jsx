import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

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

  const reservationElement = reservations.map((reservation) => (
    <div key={reservation.id} className="container border-bottom py-2">
      <div className="d-flex">
        <FontAwesomeIcon icon={faUser} className="fs-4" />
        <p className="text-primary fw-bold px-2">
          {reservation.user.first_name} {reservation.user.last_name}
        </p>
      </div>
      <p>
        <FontAwesomeIcon icon={faCalendar} />
        <strong className="px-2">From date: </strong>
        <span className="fst-italic">{new Date(reservation.start_at).toLocaleString('sr-RS')}</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faCalendar} />
        <strong className="px-2">To date: </strong>
        <span className="fst-italic">{new Date(reservation.end_at).toLocaleString('sr-RS')}</span>
      </p>
    </div>
  ));

  return (
    <div className="px-2">{reservationElement}</div>
  );
};

export default CarReservations;
