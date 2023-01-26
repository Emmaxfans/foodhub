import axios from 'axios';
// import React from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';
import { useState } from 'react';



export default function Loginpage () {

  const [login, setlogin] = useState({email: "", password: ""});

const handleLogin=(e) =>{
    const { name,value, }= e.target;
    setlogin({...login, [name]:value});
    console.log(login);
}

const submitLogin = async (e) =>{
    e.preventDefault();
    // console.log(login);
    try{
        const res= await axios.post('https://vendlify-api.onrender.com/api/v1/users/login', login)
        console.log(res)
        if (res.status === 200){
            window.location = "/order"
        } 
    }catch{
        // alert("Error signing in!")
    }

  }

 
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
      <div className='row row-con'>
        <div className='col-lg-6'>
        <img className='login-img img-fluid'  src='..\foodhub\Group 13.png' alt='Loginpage'/>
        </div>

      <div className='col-lg-6 login-con1'>
      <div className='login-con2x'>

        <Link to="/">Back</Link>

      <h1 className='h2-style'>WELCOME BACK!</h1>

  <form className='login-form' onChange={ submitLogin }>

<div class="input-con"  >
    <input onChange={handleLogin} value={login.email} type="email" name="email" 
    className="form-control" placeholder='Enter your email' required/>
  </div>

  <div className='input-con'>

  <input onChange={handleLogin} value={login.password} className='form-control input-psw' 
  type='password' name='password'
  placeholder='Password' 
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  
  required/>
  <span className='error-psw'>
  <p className='error-msg'>password must contain at least:</p> 
  <li>one number</li>
  <li>one uppercase lowercase letter</li>
  <li>8 or more characters</li>
  </span>

{/* <i  className={`fa "fa-eye-slash" : "fa-eye" }`}></i> */}
  </div>

  <button type="submit" id='submit' class=" btn-color form-control ">Login</button>

  <span className='login-auth'>
  <Link className='login-link' to='/sign-up'>Create Account</Link>

  <Link className='login-link' to='/#'>Forget Password</Link>
  </span>
 
</form>
      </div>
    </div>
  </div>
  </div>
   
    
  )
}
