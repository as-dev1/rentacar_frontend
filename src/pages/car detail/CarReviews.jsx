import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser, faComment} from "@fortawesome/free-solid-svg-icons";

const CarReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const result = await axios.get(`http://localhost:8080/api/review/car/${id}`);
    setReviews(result.data);
  };

  const reviewElement = reviews.map((review) => 
    <section key={review.id} className="container border-bottom py-2">
      <div className="d-flex">
        <FontAwesomeIcon icon={faUser} className="fs-4" />
        <p className="text-primary fw-bold px-2">
          {review.user.first_name} {review.user.last_name}
        </p>
      </div>
      <p>
        <FontAwesomeIcon icon={faComment} />
        <strong className="px-2">Comment: </strong>
        <span className="fst-italic">{review.comment}</span>
      </p>
    </section>

  ) 
  
  return (
    <section className="px-2">
      {reviews.length ? reviewElement : 
        <p className="text-center">Currently no reviews. 😞</p>
      }
    </section>
  )
}

export default CarReviews