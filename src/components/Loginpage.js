import React from 'react'
import '../Loginsignup.css';

export default function Loginsignup () {
  return (
    <div>
      <div className='login-con1'>
        <img className='login-img' src='..\foodhub\Group 13.png' alt='login-image'/>
      </div>

      <div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Passord'/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="submit" class="btn btn-primary">Login</button>

  <a className=''>Create Account</a>
  <a className=''>Forgotten passord</a>
</form>
      </div>
    </div>
    
  )
}
