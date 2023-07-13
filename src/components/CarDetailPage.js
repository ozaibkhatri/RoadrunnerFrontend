import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CarDetailPage = ( ) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const[car,setcars]=useState([])

    // useEffect((id)=>{
    //   fetch(`http://localhost:8080/cars/gets/${id}`)
    //   .then((response)=>response.json())
    //   .then((data)=>setcars(data))

    // }, [id]);
    useEffect(() => {
      fetch(`http://localhost:8080/cars/gets/${id}`)
        .then((response) => response.json())
        .then((data) => setcars(data))
        .catch(err=>{
          console.log(err)
        });
    }, [id]);
    


  return (
    <div>
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.longdescription}</p>
      <p>Daily Rental Price: {car.rentalfeeperday}</p>
      <Link to="/rentalform">
      <button>Rent Me Now</button>
      </Link>
    </div>
  );
};

export default CarDetailPage;


