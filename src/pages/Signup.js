import React from 'react'
import { Link } from 'react-router-dom';
import '../Loginsignup.css';

export default function Signup () {

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
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 14.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className=''>WELCOME FOODHUB!</h1>
  <form className='login-form' onSubmit={submitForm} >

  <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name'/>
  </div>

  <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name'/>
  </div>

  <div class="input-con">
    
    <input type="text" className={` ${warnemail ? "warning active-input1" : "form-control" }`} placeholder="Enter your email" value={inputtext.email} onChange={inputEvent} name="email" />
  </div>
  <div class="input-con">
    <input type={password} className={` ${warnpassword ? "warning" : "form-control" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
  </div>

  <button type="submit" class="btn btn-color form-control mb-3">Sign up</button>

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
