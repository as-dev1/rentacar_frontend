import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState("");

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const result = await axios.get("http://localhost:8080/api/car");
    setCars(result.data);
  };

  const displayedCars = typeFilter ? cars.filter((car) => car.type.toLowerCase() === typeFilter) : cars;

  const handleFilterChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
    if (selectedType === "") {
      setSearchParams("");
    } else {
      setSearchParams(`?type=${selectedType}`);
    }
  };

  const handleClearFilter = () => {
    setSearchParams("");
    setSelectedType("");
  };

  const carElement = displayedCars.map((car) => (
    <section key={car.id} className="car_card">
      <Link to={`${car.id}`}>
        <img className="car_img" src={car.img_path} alt={`${car.brand} ${car.model}`} />
        <div className="car_stats">
          <h3 className="car_brand">{car.brand}</h3>
          <h4 className="car_model">{car.model}</h4>
          <button className="car_type">{car.type.toLowerCase()}</button>
          <span className="car_price">Price: ${car.price_per_day} / day</span>
        </div>
      </Link>
    </section>
  ));

  return (
    <>
      <div className="d-flex justify-content-end my-3 custom-align">
        {typeFilter ? (
          <button className="btn btn-outline-secondary mx-1" onClick={handleClearFilter}>
            Clear filter
          </button>
        ) : null}
        <select className="form-select w-auto" onChange={handleFilterChange} value={selectedType}>
          <option value="">Select a type</option>
          <option value="luxury">Luxury</option>
          <option value="sport">Sport</option>
          <option value="electric">Electric</option>
          <option value="suv">SUV</option>
          <option value="convertible">Convertible</option>
        </select>
      </div>
      <main className="cars-wrapper">{carElement}</main>
    </>
  );
};

export default Cars;
