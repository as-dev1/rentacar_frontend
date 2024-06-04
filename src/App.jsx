import React from "react";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Error from "./pages/Error";
import CarDetail from "./pages/car detail/CarDetail";
import CarInfo from "./pages/car detail/CarInfo"
import CarReservations from "./pages/car detail/CarReservations"
import AddCar from "./pages/car detail/AddCar"
import EditCar from "./pages/car detail/EditCar";
import CarReviews from "./pages/car detail/CarReviews"
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="addcar" element={<AddCar />} />
          <Route path="users" element={<Users />} />
          <Route path="edituser/:id" element={<EditUser />} />
          <Route path="cars/:id" element={<CarDetail />} >
            <Route index element={<CarInfo />} />
            <Route path="reservations" element={<CarReservations />} />
            <Route path="reviews" element={<CarReviews />} />
          </Route>
          <Route path="cars/:id/edit" element={<EditCar />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
