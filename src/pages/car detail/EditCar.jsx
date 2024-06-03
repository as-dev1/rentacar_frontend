import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    type: "",
    year: "",
    hp: "",
    description: "",
    number_of_seats: "",
    price_per_day: "",
    img_path: "",
  });

  const { brand, model, type, year, hp, description, number_of_seats, price_per_day, img_path } = car;

  const onInputChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCar();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/car/${id}`, car);
    navigate("/cars");
  };

  const loadCar = async () => {
    const result = await axios.get(`http://localhost:8080/api/car/${id}`);
    setCar(result.data);
  };

  return (
    <section className="container">
      <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow text-center">
        <h2 className="text-center m-4">Add Car</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter brand name"
                name="brand"
                value={brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="Model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter car model"
                name="model"
                value={model}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Type" className="form-label">
                Type
              </label>
              <select 
                className="form-control form-select" 
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Select car type</option> 
                <option value="LUXURY">Luxury</option> 
                <option value="SPORT">Sport</option> 
                <option value="ELECTRIC">Electric</option> 
                <option value="SUV">Suv</option> 
                <option value="CONVERTIBLE">Convertible</option> 
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="Year" className="form-label">
                Year
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter car year"
                name="year"
                value={year}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Hp" className="form-label">
                Horsepower
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter car hp"
                name="hp"
                value={hp}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="number_of_seats" className="form-label">
                Number of seats
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter number of seats"
                name="number_of_seats"
                value={number_of_seats}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="price_per_day" className="form-label">
                Price per day
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                name="price_per_day"
                value={price_per_day}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="img_path" className="form-label">
                Upload image
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter img url"
                name="img_path"
                value={img_path}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter car description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to=".." relative="path">
            Cancel
          </Link>
        </form>
      </div>
    </section>
  )
}

export default EditCar