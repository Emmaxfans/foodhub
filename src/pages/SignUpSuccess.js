import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const SignUpSuccess = () => {
  return (
    <div className='error'>
        <center>
        <h3 className='text-white'>Sign up successfully, confirm your email</h3>

        <p><Link to='/Login'>click here to login</Link></p>
        </center>
    </div>
  )
}

export default SignUpSuccess