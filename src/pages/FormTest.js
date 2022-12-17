import axios from "axios";
// import React, { useEffect } from "react"
import { useState } from "react";
// import { Link } from "react-router-dom";
import '../App.css'

const FormTest = () =>{

    //  POST REQUEST FOR SIGN UP


const [formvalue, setFormvalue] = useState({userName: "", email: "", phoneNumber: "", password: "", passwordConfirm: ""});

const article  = {
  'title': 'This is a test sign up',
  'test-user': 'A test run sign up api via render hosting service'

};

const handleInput=(e) =>{
    const { name,value }= e.target;
    setFormvalue({...formvalue, [name]:value});
    console.log(formvalue);
}

const submitForm1 = async (e) =>{
    e.preventDefault();
    // console.log(formvalue);
    try{
        const res= await axios.post('https://vendlify-api.onrender.com/api/v1/users/signup', formvalue, {article})
        console.log(res)
        if (res.status === 200){
            window.location = "/Auth"
        }

        else{
            document.getElementById("submit").innerHTML = "Error with sign up"
        }
        
    }catch(err){

    }
}

// Simple GET request using axios
// const element = document.querySelector('#get-request .result');
// axios.get('https://api.npms.io/v2/search?q=axios')
//     .then(response => element.innerHTML = response.data.total);

// POST USING AXIOS

    // const [userName, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState([]);
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');
    // const [posts, setPosts] = useState([]);
 
    // const submitForm1 = (e) => {
    //    e.preventDefault();
    //    addPosts(userName, email, phoneNumber, password, passwordConfirm);
    // };
 
    // const addPosts = (userName, email, phoneNumber, password, passwordConfirm) => {
    //    client
    //       .post('', {
    //         userName: userName,
    //          email: email,
    //          phoneNumber: phoneNumber,
    //          password: password,
    //          passwordConfirm: passwordConfirm,

    //       })
    //       .then((response) => {
    //          setPosts([response.data, ...posts]);
    //       });
    //    setEmail('');
    //    setUsername('');
    //    setPhoneNumber('');
    //    setPassword('');
    //    setPasswordConfirm('');
    // };

// const [email, setEmail] = useState('');
// const [username, setUsername] = useState('');

// useEffect(() =>(
//     axios.get('https://vendlify-api.onrender.com/api/v1/users/signup').then(res => {
//         console.log("getting from ::::", res.data)
//         setData(res.data)
//     }).catch(err => console.log(err))
// ), [])

// const postData = (e) => {
//     e.preventDefault();
//     axios.post('https://vendlify-api.onrender.com/api/v1/users/signup',{
//         email,
//         username
//     }).then(res => console.log('posting data', res)).catch(err => console.log(err))

//  }
    return(

    <div className="error container">
        <form onSubmit={ submitForm1 }>


  <div className="mb-3">
    <label for="" class="form-label">Username</label>
    <input type="username"  name="userName" value={formvalue.userName} onChange={handleInput} className="form-control" id="" aria-describedby="" required/>
  </div>

  <div className="mb-3">
    <label for="" class="form-label">PhoneNumber</label>
    <input type="username"  name="phoneNumber" value={formvalue.phoneNumber} onChange={handleInput} className="form-control" id="" aria-describedby="" required/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  name="email" value={formvalue.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="" class="form-label">password</label>
    <input type="username"  name="password" value={formvalue.password} onChange={handleInput} className="form-control" id="" aria-describedby="" required/>
  </div>

  <div className="mb-3">
    <label for="" class="form-label">Confirm password</label>
    <input type="username"  name="passwordConfirm" value={formvalue.passwordConfirm} onChange={handleInput} className="form-control" id="" aria-describedby="" required/>
  </div>

  {/* <div className="mb-3">
    <label for="" class="form-label">Phone number</label>
    <input type="email" name="phoneno" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div> */}

  {/* <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password1" class="form-control" id="exampleInputPassword1"/>
  </div> */}

  {/* <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" name="confirmpassword" class="form-control" id="exampleInputPassword1"/>
  </div> */}

  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" id="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
    )

}

export default FormTest