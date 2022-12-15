import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Loginsignup.css';

export default function Signup () {

    // Usestate for the login form

 const{useState}=React;
 const[inputtext,setinputtext]=useState({userName: "", phoneNumber: "", email:"", password:"", passwordConfirm: ""
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

     //  POST REQUEST FOR SIGN UP


// const [inputtext, setinputtext] = useState({userName: "", email: "", phoneNumber: "", password: "", passwordConfirm: ""});

// const inputEvent=(e) =>{
//     const { name,value }= e.target;
//     setFormvalue({...formvalue, [name]:value});
//     console.log(formvalue);
// }

// const submitForm1 = async (e) =>{
//     e.preventDefault();
//     // console.log(formvalue);
//     try{
//         const res= await axios.post('https://vendlify-api.onrender.com/api/v1/users/signup', formvalue)
//         console.log(res)
//         if (res.status === 200){
//             window.location = "/Auth"
//         }

//         else{
//             document.getElementById("submit").innerHTML = "Error with sign up"
//         }
        
//     }catch(err){

//     }
// }


//  POST REQUEST FOR SIGN UP

// const [username, setUsername] = useState('');
// const [phoneno, setPhoneno] = useState('');
// const [email, setEmail] = useState('');
// const [password1, setpassword1] = useState('');
// const [confirmpassword, setconfirmpassword] = useState('');

// const submitForm = (e) => {
   // setEmail, setPhoneno, setUsername, setpassword1, setconfirmpassword(e.target.value)
//   e.preventDefault();
//   addPosts(username, phoneno, email, password, confirmpassword );
// };

  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 14.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className='h1-style'>WELCOME FOODHUB!</h1>

  <form className='login-form' onSubmit={submitForm} >

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

</form>
</div>
      </div>
    </div>
  </div>
   
    
  );
}
