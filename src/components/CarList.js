
import React from 'react';


const CarList = ({ cars}) => {
  return (
    <div className={styles.container}>
      {cars.map((car) => (
        <div
          key={car.id}
          onClick={() => onItemClick(car.id)}
          className={styles.carItem}
        >
          <img src={car.image} alt="Car" />
          
          <h3 className={styles.title}>{car.name}</h3>
          <p className={styles.description}>{car.shortdescription}</p>
          <p className={styles.info}>Price: {car.rentalfeeperday}</p>
        </div>
      ))}
    </div>
  );
};


export default CarList;

