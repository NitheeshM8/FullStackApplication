import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarService from '../Service/Carservice';

const Home=()=> {
  const nav=useNavigate();
  function myFunction() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const [car, setCar] = useState([])
  useEffect(() => {
      getAllCars();
  }, [])

  const getAllCars = () => {
      CarService.getAllCars().then((response) => {
          setCar(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }

  const deleteCar = (carId) => {
    if(window.confirm("Sure to Delete?")){
     CarService.deleteCar(carId).then((response) =>{
      getAllCars();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllCar = () => {
    if(window.confirm("Sure to Delete All Employees?")){
     CarService.deleteAllCar().then((response) =>{
      getAllCars();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/")
    }
  }
  return (
    <div id="container">
    <div id="me"><h1>Royal Car House</h1></div>
    <Link to="/add"><button id="addbtn">Add New Car</button></Link>
    <button id="viewbtn" onClick={deleteAllCar} >Delete All Car Details</button>
  
    <table id="table">
              <thead>
                <tr>
                  <th>Car Id</th>
                  <th>Company Name</th>
                  <th>Car Model</th>
                  <th>Customer Name</th>
                  <th>Customer Address</th>
                  <th>Customer Age</th>
                  <th>Customer Phone</th>
                  <th>Car Price</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
              {
                car.map(
                    cars => (
      <tr>
             <th> {cars.id}</th>
             <th> {cars.companyname}</th>
             <th> {cars.carmodel}</th>
             <th> {cars.buyname}</th>
             <th> {cars.address}</th>
             <th> {cars.age}</th>
             <th> {cars.phone}</th>
             <th> {cars.price}</th>
             <th><Link  to={`/update/${cars.id}`}><button id="actions">Update</button></Link> 
             <button id="actions"  onClick = {() => deleteCar(cars.id)}
            > Delete!</button></th>
            
      </tr>
    ))}
              </tbody>
            </table>
    <button id="logout" onClick={LogoutHandler}>Logout</button>
        
    </div>
  )
}

export default Home