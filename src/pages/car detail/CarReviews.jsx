import React from 'react'
import { useOutletContext } from 'react-router-dom'

const CarReviews = () => {
  const { car } = useOutletContext();

  return (
    <div>Car Reviews</div>
  )
}

export default CarReviews