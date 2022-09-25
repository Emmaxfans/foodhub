import React from 'react'
import '../Loginsignup.css';

export default function Loginpage () {
  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-lg-6'>
        <img className='login-img'  src='..\foodhub\Group 13.png' alt=''/>
        </div>

      <div className='col-lg-6'>
      <div className='login-con2'>
      <h1 className=''>WELCOME BACK!</h1>
  <form>
  <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address'/>
  </div>
  <div class="input-con">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Passord'/>
  </div>

  <button type="submit" class="btn btn-primary form-control mb-3">Login</button>

  <span>
  <a className='' href='/#'><p>Create Account</p></a>

<a  href='/#'><p className='pass'>Forgotten passord</p></a>
  </span>
 
</form>
</div>
      </div>
    </div>
  </div>
   
    
  )
}

// export default Loginpage
