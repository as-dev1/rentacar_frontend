import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/car detail/CarDetail";
import CarInfo from "./pages/car detail/CarInfo"
import CarReservations from "./pages/car detail/CarReservations"
import AddCar from "./pages/car detail/AddCar"
import CarReviews from "./pages/car detail/CarReviews"
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditCar from "./pages/car detail/EditCar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="addcar" element={<AddCar />} />
          <Route path="cars/:id" element={<CarDetail />} >
            <Route index element={<CarInfo />} />
            <Route path="reservations" element={<CarReservations />} />
            <Route path="reviews" element={<CarReviews />} />
          </Route>
          <Route path="cars/:id/edit" element={<EditCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
