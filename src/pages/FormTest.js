import axios from "axios";
import { useState } from "react";
import '../App.css'

const FormTest = () =>{

    //  POST REQUEST FOR SIGN UP


const [formvalue, setFormvalue] = useState({userName: "", email: "", phoneNumber: "", password: "", passwordConfirm: ""});

const article  = {
  'title': 'This is a test sign up',
  'test-user': 'A test run sign up api via render hosting service'

};

const handleInput=(e) =>{
    const { name,value, }= e.target;
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
            window.location = "/auth"
        }

        else{
            document.getElementById("submit").innerHTML = "Error with sign up"
        }
        
    }catch(err){

    }
    
}

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