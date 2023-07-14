import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cs from "./Car.css";

const Car = ({ car }) => {

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/rentalform/${car.id}` , {state: car})
  }

  return (
    <div className='carpage'>
      <img style={{width:"500px",height:"400px",display:"flex",justifyContent:"center",alignItems:"center"}}src={car.image} alt={car.name} />
      <Link to={`/cardetails/${car.id}`}>
      <h3 style={{fontSize:"30px",color:"black"}}>{car.name}</h3>
      </Link>
      <p style>{car.shortdescription}</p>
      <p>Daily Rental Price: {car.rentalfeeperday}</p>
      {/* <Link to={`/rentalform/${car.id}`}> */}
      <button onClick={handleClick}>Rent Me Now</button>
      {/* </Link> */}

      
      
    </div>
  );
};


export default Car;

