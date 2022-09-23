import React from 'react'
import '../Loginsignup.css';

export default function Signup () {
  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 14.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className=''>WELCOME FOODHUB!</h1>
  <form>

  <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name'/>
  </div>

  <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address'/>
  </div>
  <div class="input-con">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Passord'/>
  </div>

  <button type="submit" class="btn btn-primary form-control mb-3">Sign up</button>

  <center>
  <a className='' href='/#'><p>You already have an account</p></a>
  </center>

</form>
</div>
      </div>
    </div>
  </div>
   
    
  )
}
