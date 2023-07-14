import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';


const RentalForm = () => {
  const{id}=useParams();

  const [formdata, setFormdata] = useState({
    name: '',
    address: '',
    phoneno: '',
    driverlicenceno: '',
    startdate: '',
    enddate: '',
    price: '',
    insurance: '',
    totalprice: ''
  });
  const [check, setcheck] = useState(false);
  const location = useLocation();
  const { state } = location;
  console.log({state})
  const rentalfee = state ? state.rentalfeeperday : null;
  const [datas,setdata]=useState('');
  console.log(id)

  

  let { name, address, phoneno, startdate, driverlicenceno, enddate, price, insurance, totalprice } = formdata;

  useEffect(() => {
    fetch(`http://localhost:8080/cars/gets/${id}`)
      .then((response) => response.json())
      .then((data) =>{ setdata(data)
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      });
  }, []);
  console.log(datas.rentalfeeperday);

  const handleChange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const calculateDays = () => {
    const arrival = new Date(startdate);
    const departure = new Date(enddate);
    const totaldays = Math.ceil((departure - arrival) / (1000 * 60 * 60 * 24));
    return totaldays;
  };

  const calculateAmount = () => {
    const perdayrent = rentalfee;
    const totaldays = calculateDays();
    return perdayrent * totaldays;
  };

  const calculateTotalRentalDays = () => {
    if (check === true) {
      const perdayrent = rentalfee;
      const start = new Date(startdate);
      const end = new Date(enddate);
      const totalrentaldays = (end - start) / (1000 * 60 * 60 * 24);
      const totalwithoutdamage = totalrentaldays * perdayrent;
      const totalwithdamage = totalrentaldays * 15000 + totalwithoutdamage;
      console.log("total =", totalwithdamage);
      return totalwithdamage;
    } else {
      const perdayrent = datas.rentalfeeperday;
      const start = new Date(startdate);
      const end = new Date(enddate);
      const totalrentaldays = (end - start) / (1000 * 60 * 60 * 24);
      console.log({totalrentaldays, perdayrent})
      const totalwithoutdamage = totalrentaldays * perdayrent;
      console.log("total =", totalwithoutdamage);
      totalprice = totalwithoutdamage;
    }
  };

  
    const handleCheckbox = (e) => {
      setcheck(e.target.checked);
    };
 
  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = {
      name: formdata.name,
      address: formdata.address,
      phone: formdata.phoneno,
      driver_licences: formdata.driverlicenceno,
      pickdate: formdata.startdate,
      dropdate: formdata.enddate,
      rental_price: formdata.price,
      insurance: formdata.insurance,
      totalamount: formdata.totalprice
    };
    // console.log(data);
    const response= fetch('http://localhost:8080/rentalform/post', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(response.ok){
    console.log("pass", response);
    }

  }
  return (

    <>
    <div>
      <h1 style={{color:"white",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center", padding:"20px"}}>RENTAL FORM</h1>
      <form onSubmit={handleSubmit}>
        <label style={{marginLeft:"600px"}}>Name</label>
        <br />
        <input  style={{marginLeft:"600px",height:"30px",borderRadius:"10px", marginBottom:"10px"}} type="text" name="name"
        value={name} onChange={handleChange}
         />
        <br />
        <br />
        <label style={{marginLeft:"600px"}}>Phone</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px",borderRadius:"10px", marginBottom:"10px"}}
          type="text"
          name="phoneno"
          value={phoneno}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{marginLeft:"600px"}}>Address</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px",borderRadius:"10px", marginBottom:"10px"}}
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{marginLeft:"600px"}}>Driving Licences</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px",borderRadius:"10px", marginBottom:"30px"}}
          type="text"
          name="driverlicenceno"
          value={driverlicenceno}
          onChange={handleChange}
        />
        <br />
        <label style={{marginLeft:"600px"}}>Rental Price</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px",borderRadius:"10px", marginBottom:"10px"}}
          type="text"
          name="price"
          value={datas.rentalfeeperday}
          onChange={handleChange}
        />
        <br/>
        <label style={{marginLeft:"600px"}}>Insurance</label>
        <br />
        <Checkbox style={{marginLeft:"600px"}}
          type="checkbox"
          name="insurance"
          value={calculateTotalRentalDays()}
          onChange={()=> handleCheckbox}
        />
        <br />
    
        <label style={{marginLeft:"600px"}}>Pick Date</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px"}}
          type="datetime-local"
          name="startdate"
          value={startdate}
          onChange={handleChange}
        />
        <br />
        <label style={{marginLeft:"600px"}}>End Date</label>
        <br />
        <input style={{marginLeft:"600px",height:"30px"}}
          type="datetime-local"
          name="enddate"
          value={enddate}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{marginLeft:"600px"}}>Total Amount</label>
        <br />
        <input style={{marginLeft:"600px", marginBottom:"20px",height:"30px",borderRadius:"10px"}}
          type="text"
          name="totalprice"
          value={totalprice}
          onChange={handleChange}
          readOnly
        />
        <br />
        

        {/* <input type="submit" value="Cancel"  />
          <input onClick={()=> handleSubmit()} type='button' value="Checkout" /> */}
        
          <Link to="/">
        <button style={{marginLeft:"600px", backgroundColor:"black",color:"white",height:"40px",borderRadius:"10px"}}>return to home page</button>
      </Link>
      <Link to="/thanks">
        <button style={{marginLeft:"20px", backgroundColor:"black",color:"white",height:"40px",borderRadius:"10px"}}>Checkout</button>
      </Link>
      </form>
    </div>

  
    </>
  );
};

export default RentalForm;



