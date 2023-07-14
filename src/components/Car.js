import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Car = ({ car }) => {

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/rentalform/${car.id}` , {state: car})
  }

  return (
    <div className='carpage'>
      <img style={{width:"500px",height:"400px",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"600px",paddingTop:"50px"}}src={car.image} alt={car.name} />
      <Link to={`/cardetails/${car.id}`}>
      <h3 style={{fontSize:"30px",color:"black",paddingLeft:"700px"}}>{car.name}</h3>
      </Link>
      <p style={{width:"500px",paddingLeft:"600px"}}>{car.shortdescription}</p>
      <p style={{fontSize:"24px",paddingLeft:"600px"}}>Daily Rental Price: {car.rentalfeeperday}</p>
      {/* <Link to={`/rentalform/${car.id}`}> */}
      <button style={{marginLeft:"800px",backgroundColor:"black",color:"white",height:"40px",borderRadius:"15px",}}onClick={handleClick}>Rent Me Now</button>
      {/* </Link> */}

      
      
    </div>
  );
};


export default Car;

