import React from 'react'
import { useOutletContext } from 'react-router-dom'

const CarInfo = () => {
  const { car } = useOutletContext();

  return (
    <section className='px-4'>
      <p><b>Category:</b> {car.type.toLowerCase()} </p>
      <p><b>Description:</b> {car.description} </p>
    </section>
  )
}

export default CarInfo