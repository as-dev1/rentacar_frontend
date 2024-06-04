import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(() => {
    const type = searchParams.get("type");
    const price = searchParams.get("price");
    return type || price || ""; 
  });

  const typeFilter = searchParams.get("type");
  const priceFilter = searchParams.get("price");

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const result = await axios.get("http://localhost:8080/api/car");
    setCars(result.data);
  };

  const displayedCars = cars
    .filter((car) => (typeFilter ? car.type.toLowerCase() === typeFilter : true))
    .sort((a, b) => {
      if (priceFilter === "asc") {
        return a.price_per_day - b.price_per_day;
      }
      if (priceFilter === "desc") {
        return b.price_per_day - a.price_per_day;
      }
      return 0;
    });

  const handleFilterChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedType(selectedOption);

    if (selectedOption === "") {
      setSearchParams("");
    } else if (selectedOption === "price_asc") {
      setSearchParams("?price=asc");
    } else if (selectedOption === "price_desc") {
      setSearchParams("?price=desc");
    } else {
      setSearchParams(`?type=${selectedOption}`);
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
        {typeFilter || priceFilter ? (
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
          <option value="price_asc">Price: Low to High</option> 
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
      <main className="cars-wrapper">{carElement}</main>
    </>
  );
};

export default Cars;
