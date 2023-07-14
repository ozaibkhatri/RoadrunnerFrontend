import React, { useEffect, useState } from 'react';
import Car from './Car';

const CarsPage = () => {
  const[cars,setcars]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/cars/get')
    .then((response)=>response.json())
    .then((data)=>setcars(data))
  },[])
  

  return (
    <div>
      <h2 style={{color:"white",backgroundColor:"black",height:"60px",fontSize:"50px",textAlign:"center"}}>RoadRunner Luxury Cars Rentals</h2>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsPage;


