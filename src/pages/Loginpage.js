import React from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';



export default function Loginpage () {

 
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

      <h1 className='h2-style'>WELCOME BACK!</h1>

  <form className='login-form'>

<div class="input-con"  >
    <input type="email" name="email" 
    className="form-control" placeholder='Enter your email'/>
  </div>

  <div className='input-con'>

  <input className='form-control' type='password' name='password'
  placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

{/* <i  className={`fa "fa-eye-slash" : "fa-eye" }`}></i> */}
  </div>

  <button type="submit" class=" btn-color form-control ">Login</button>

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
