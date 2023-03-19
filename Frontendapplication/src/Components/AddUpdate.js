import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import CarService from '../Service/Carservice';

const AddUpdate=()=> {
  const nav=useNavigate();
  const[companyname,setname]=useState('');
  const[carmodel,setmodel]=useState('');
  const[buyname,setbuyname]=useState('');
  const[address,setaddress]=useState('');
  const[age,setage]=useState('');
  const[phone,setphone]=useState('');
  const[price,setprice]=useState('');
  const {id} = useParams();
    const saveOrUpdateCar = (e) => {
      e.preventDefault();
      if(companyname.length==0||carmodel.length==0||buyname.length==0||address.length==0||age.length==0||phone.length==0||price.length==0){
        alert("Enter All Details")
      }
      else if(phone.length<10){
        alert("Enter Correct Phone Number!")
      }
      
      else if(age<18||age>65){
        alert("Enter Correct Age!")
      }
      else{
      if (window.confirm("Confirm Details!") == true) {
        e.preventDefault();
          const car = {id, companyname,carmodel,buyname,address,age,phone,price}
          if(id){
              CarService.updateCar(id, car).then((response) => {
                  nav('/home')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              CarService.createCar(car).then((response) =>{
                  console.log(response.data)
                  nav('/home');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
          CarService.getCarById(id).then((response) =>{
              setname(response.data.companyname)
              setmodel(response.data.carmodel)
              setbuyname(response.data.buyname)
              setaddress(response.data.address)
              setage(response.data.age)
              setphone(response.data.phone)
              setprice(response.data.price)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Car Details</h1>
        }else{
            return <h1>Add Car Details</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Car Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Enter Company Name" value={companyname} onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Car Model " value={carmodel} onChange={(e)=>setmodel(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Customer Name" value={buyname} onChange={(e)=>setbuyname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Customer Address" value={address} onChange={(e)=>setaddress(e.target.value)}  />
        </div>
        <div className="input">
          <input type="number" placeholder="Enter Customer Age" value={age}  onChange={(e)=>setage(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Customer Phone Number" value={phone}  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Car Price" value={price} pattern="[0-9]+"   onChange={(e)=>setprice(e.target.value)} />
        </div>
        
        <input onClick={saveOrUpdateCar} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/home">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}

export default AddUpdate