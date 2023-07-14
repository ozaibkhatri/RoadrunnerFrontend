import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CarDetailPage from "./components/CarDetailPage";
import CarsPage from "./components/CarsPage";
import RentalForm from "./components/RentalForm";
import ThanksPage from "./components/Thank";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<CarsPage />} />
          <Route path="/cardetails/:id" element={<CarDetailPage />} />
          <Route path="/rentalform/:id" element={<RentalForm />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
