import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';
import axios from 'axios';

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


//  POST REQUEST FOR SIGN UP


const [signup, setsignup] = useState({userName: "", email: "", phoneNumber: "", password: "", passwordConfirm: ""});

const handleSignup=(e) =>{
    const { name,value, }= e.target;
    setsignup({...signup, [name]:value});
    console.log(signup);
}

const submitSignup = async (e) =>{
    e.preventDefault();
    // console.log(formvalue);
    try{
        const res= await axios.post('https://vendlify-api.onrender.com/api/v1/users/signup', signup)
        console.log(res)
        if (res.status === 200){
            window.location = "/auth"
        } 
    }catch{
        alert("Error creating account!")
    }
    
}

     
  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 14.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className='h1-style'>WELCOME FOODHUB!</h1>

{/* NEW SIGN UP FORM  */}

<form className='login-form' onSubmit={submitSignup}>

  <div class="input-con">
    <input value={signup.userName} onChange={handleSignup} type="text" name='userName' class="form-control" 
    id="" aria-describedby="" placeholder='First Name' required/>
  </div>

  <div class="input-con">
    <input value={signup.phoneNumber} onChange={handleSignup} type="text" name='phoneNumber' class="form-control" 
   id='' aria-describedby="" placeholder='Phone Number' required/>
  </div>
    
  <div class="input-con"  >
    <input value={signup.email} onChange={handleSignup} type="email" className="form-control" placeholder="Enter your email" name="email" required />
  </div>


  <div class="input-con">
    <input value={signup.password} onChange={handleSignup} className="form-control  input-psw" type="password" name='password'  placeholder="password"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
    <i className="fa fa-eye-slash fa-eye" id="Eye" ></i>
    <span className='error-psw'>
      <p className='error-msg'>password must contain at least:</p> 
        <li>one number</li>
        <li>one uppercase lowercase letter</li>
        <li>8 or more characters</li>
    </span>
    
  </div>

  <div class="input-con">
    <input value={signup.passwordConfirm} onChange={handleSignup} type="password" name='passwordConfirm' className='form-control' placeholder='confirm password' required/>
    <i className="fa fa-eye-slash fa-eye" id="Eye" ></i>
    {/* <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i> */}
  </div>

  <button type="submit"  id='signup' class="btn btn-color form-control mb-3" >Sign up</button>

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
