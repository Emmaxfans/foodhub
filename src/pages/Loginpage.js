import React from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';



export default function Loginpage () {

 // Usestate for the login form

 const{useState}=React;
 const[inputtext,setinputtext]=useState({
 email:"",
 password:""
 });
 
 const[warnemail,setwarnemail]=useState(false);
 const[warnpassword,setwarnpassword]=useState(false);
 
 const[eye,seteye]=useState(true);
 const[password,setpassword]=useState("password");
 const[type,settype]=useState(false);
 
 const inputEvent=(event)=>{
 const name=event.target.name;
 const value=event.target.value;
 setinputtext((lastValue)=>{
 return{
 ...lastValue,
 [name]:value
 }
 });
 
 }
 
 
 const submitForm=(e)=>{   
 e.preventDefault();
 setwarnemail(false);
 setwarnpassword(false);
 if(inputtext.email===""){
 setwarnemail(true);
 }
 else if(inputtext.password===""){
 setwarnpassword(true);
 } 
 else{
 alert("form submitted"); 
 }
 
 }
 
 const Eye=()=>{
     if(password==="password"){
         setpassword("text");
         seteye(false);
         settype(true);
     }
     else{
         setpassword("password");
         seteye(true);
         settype(false);
     }
 }


  return (
   <div className='container1'>
      <div className='row row-con'>
        <div className='col-lg-6'>
        <img className='login-img img-fluid'  src='..\foodhub\Group 13.png' alt='Loginpage'/>
        </div>

      <div className='col-lg-6 login-con1'>
      <div className='login-con2x'>

      <h1 className='h2-style'>WELCOME BACK!</h1>

  <form className='login-form' onSubmit={submitForm}>
  <div class="input-con"  >
    <input type="text" className={` ${warnemail ? "warning active-input1" : "form-control" }`} placeholder="Enter your email" value={inputtext.email} onChange={inputEvent} name="email" />
  </div>
  <div class="input-con">
    <input type={password} className={` ${warnpassword ? "warning" : "form-control" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />

    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
  </div>

  <button type="submit" class="btn btn-color form-control mb-3">Login</button>

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
