import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
 
  return (
    <div>
      <img src={car.image} alt={car.name} />
      <Link to={`/cardetails/${car.id}`}>
      <h3>{car.name}</h3>
      </Link>
      <p>{car.shortdescription}</p>
      <p>Daily Rental Price: {car.rentalfeeperday}</p>
      <Link to="/rentalform">
      <button>Rent Me Now</button>
      </Link>
 
      
      
    </div>
  );
};

export default Car;

