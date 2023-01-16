import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';

export default function Signup () {

    // Usestate for the login form

//  const{useState}=React;
//  const[inputtext,setinputtext]=useState({userName: "", phoneNumber: "", email:"", password:"", passwordConfirm: ""
//  });
 
//  const[warnemail,setwarnemail]=useState(false);
//  const[warnpassword,setwarnpassword]=useState(false);
 
//  const[eye,seteye]=useState(true);
//  const[password,setpassword]=useState("password");
//  const[type,settype]=useState(false);
 
//  const inputEvent=(event)=>{
//  const name=event.target.name;
//  const value=event.target.value;
//  setinputtext((lastValue)=>{
//  return{
//  ...lastValue,
//  [name]:value
//  }
//  });
 
//  }
 
 
//  const submitForm=(e)=>{  
//  e.preventDefault();
//  setwarnemail(false);
//  setwarnpassword(false);
//  if(inputtext.email===""){
//  setwarnemail(true);
//  }
 
//  else if(inputtext.password===""){
//  setwarnpassword(true);
//  } 
//  else{
//  alert("form submitted");
//  }
 
//  }
 
//  const Eye=()=>{
//      if(password==="password"){
//          setpassword("text");
//          seteye(false);
//          settype(true);
//      }
//      else{
//          setpassword("password");
//          seteye(true);
//          settype(false);
//      }
//  }

     
  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 14.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className='h1-style'>WELCOME FOODHUB!</h1>

  {/* <form className='login-form' onSubmit={submitForm} >

  <div class="input-con">
    <input type="text" name='userName' class="form-control" 
    id="" aria-describedby="emailHelp" placeholder='First Name' 
    value={inputtext.userName} onChange={inputEvent} required/>
  </div>

  <div class="input-con">
    <input type="text" name='phoneNumber' class="form-control" 
   id='' aria-describedby="emailHelp" placeholder='Phone Number' required
    value={inputtext.phoneNumber} onChange={inputEvent}/>
  </div>
    
  <div class="input-con"  >
    <input type="email" className={` ${warnemail ? 
      "warning active-input1" : "form-control" }`} placeholder="Enter your email" 
      value={inputtext.email} onChange={inputEvent} name="email" />
  </div>


  <div class="input-con">
    <input type={password} name='password' className={` ${warnpassword ? "warning" : "form-control" } ${type ? "type_password" : "" }`} placeholder="password" value={inputtext.password} onChange={inputEvent} required/>
    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
  </div>

  <div class="input-con">
    <input type="text" name='passwordConfirm' className='form-control warning' placeholder='confirm password'  value={inputtext.passwordConfirm} onChange={inputEvent} required/>
    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
  </div>

  <button type="submit" class="btn btn-color form-control mb-3" id='signup' >Sign up</button>

  <center className='mt-3'>
  <Link className='login-link' to='/Login'>You already have an account</Link>
  </center>

  <center className='mt-3'>
  You don't want to sign up?<Link className='login-link' to='/Order'>click here to make an order</Link>
  </center>

</form> */}

{/* NEW SIGN UP FORM  */}

<form className='login-form'>

  <div class="input-con">
    <input type="text" name='userName' class="form-control" 
    id="" aria-describedby="" placeholder='First Name' required/>
  </div>

  <div class="input-con">
    <input type="text" name='phoneNumber' class="form-control" 
   id='' aria-describedby="" placeholder='Phone Number' required/>
  </div>
    
  <div class="input-con"  >
    <input type="email" className="form-control" placeholder="Enter your email" name="email" required />
  </div>


  <div class="input-con">
    <input className="form-control  input-psw" type="password" name='password'  placeholder="password" 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
    <span className='error-psw'>
      <p className='error-msg'>password must contain at least:</p> 
        <li>one number</li>
        <li>one uppercase lowercase letter</li>
        <li>8 or more characters</li>
    </span>
    {/* <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i> */}
  </div>

  <div class="input-con">
    <input type="password" name='passwordConfirm' className='form-control' placeholder='confirm password' required/>
    {/* <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i> */}
  </div>

  <button type="submit" class="btn btn-color form-control mb-3" id='signup' >Sign up</button>

  <center className='mt-3'>
  <Link className='login-link' to='/Login'>You already have an account</Link>
  </center>

  <center className='mt-3'>
  You don't want to sign up?<Link className='login-link' to='/Order'>click here to make an order</Link>
  </center>

</form>





</div>
      </div>
    </div>
  </div>
   
    
  );
}
