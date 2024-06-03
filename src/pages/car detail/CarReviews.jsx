import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { PersonCircle } from "react-bootstrap-icons";

const CarReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState(""); 
  const [userId, setUserId] = useState(""); 

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const result = await axios.get(`http://localhost:8080/api/review/car/${id}`);
    setReviews(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      user: {
        id: userId
      },
      car: {
        id: id
      },
      comment: comment
    };

    await axios.post("http://localhost:8080/api/review", newReview);
    setComment("");
    setUserId(""); 
    loadReviews(); 
  };
  
  const deleteReview = async (reviewId) => {
    await axios.delete(`http://localhost:8080/api/review/${reviewId}`);
    loadReviews(); 
  };

  const reviewElement = reviews.map((review) => 
    <section key={review.id} className="container border-bottom py-2">
      <div className="d-flex">
        <PersonCircle className="fs-4" />
        <p className="text-primary fw-bold px-2">
          {review.user.first_name} {review.user.last_name}
        </p>
      </div>
      <p>
        <FontAwesomeIcon icon={faComment} />
        <strong className="px-2">Comment: </strong>
        <span className="fst-italic">{review.comment}</span>
      </p>
      <button className="btn btn-danger btn-sm" onClick={() => deleteReview(review.id)}>
        Delete
      </button>
    </section>

  ) 
  
  return (
    <section className="px-2">
      <form onSubmit={onSubmit} className="mb-4 container">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User ID</label>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Id"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {reviews.length ? reviewElement : 
        <p className="text-center">Currently no reviews. 😞</p>
      }
    </section>
  )
}

export default CarReviews