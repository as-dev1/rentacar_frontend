import React from 'react'
import { useOutletContext } from 'react-router-dom'

const CarReservations = () => {
  const { car } = useOutletContext();
  
  return (
    <div>Car Reservations</div>
  )
}

export default CarReservations