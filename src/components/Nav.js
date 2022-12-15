import React from "react";
import '../App.css'
import {FunctionalComponent1} from './FunctionalComponent';
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a className="navbar-brand text-white" href="/#">   
        <img className='img1a img-fluid' src='.\foodhub\bibimbap.png' alt='foodhub1'/>
        <h5 className='foodhub'>FOODHUB</h5>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse nav-float" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item px-3">
            <Link to='/' className="nav-link active text-white fs-font" aria-current="page">Home</Link>
          </li>
          <li className="nav-item px-3 fs-font">
          <Link  to='/Login' className="nav-link text-white">Login</Link>
          </li>

          {/* <li className="nav-item px-3  fs-font ">
          <Link  to='/Order' className="nav-link text-white">Order Now</Link>
          </li> */}
        
          <li className="nav-item px-3 signup2">
          <Link  to='/Sign-Up' className="nav-link fs-font ">Sign Up</Link>
        
          </li>
        
          <li className="nav-item px-3">
            <Link to='/Sign-Up' className="nav-link text-white"><FunctionalComponent1/></Link>
          </li>
        
         
        </ul>
        </div>
        </div>
        </nav>
        
        </div>
    );

}

export default Nav