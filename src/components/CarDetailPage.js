// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';

// const CarDetailPage = ( ) => {
//   const navigate = useNavigate();
//   const {id} = useParams();
//   const[car,setcars]=useState([])

    
//     useEffect(() => {
//       fetch(`http://localhost:8080/cars/gets/${id}`)
//         .then((response) => response.json())
//         .then((data) => setcars(data))
//         .catch(err=>{
//           console.log(err)
//         });
//     }, [id]);
    


//   return (
//     <div>
//       <img src={car.image} alt={car.name} />
//       <h2>{car.name}</h2>
//       <p>{car.longdescription}</p>
//       <p>Daily Rental Price: {car.rentalfeeperday}</p>
//       <Link to={`/rentalform/${car.id}`}>
//       <button>Rent Me Now</button>
//       </Link>
//     </div>
//   );
// };

// export default CarDetailPage;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CarDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cars/gets/${id}`)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div style={styles.container}>
      <img src={car.image} alt={car.name} style={styles.image} />
      <h2 style={styles.heading}>{car.name}</h2>
      <p>{car.longdescription}</p>
      <p>Daily Rental Price: {car.rentalfeeperday}</p>
      <Link to={`/rentalform/${car.id}`}>
        <button style={styles.button}>Rent Me Now</button>
      </Link>
    </div>
  );
};

export default CarDetailPage;

const styles = {
  container: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  image: {
    width: '600px',
    height: '400px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  
  longdescription:{
    width: "400px"
  }
};


