import React from 'react'
import styled from "styled-components";
import { FunctionalComponent1 } from './FunctionalComponent';


// REACT ROUTER

import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from './About';
import Contact from './Contact';
import Loginpage from './Loginpage';

const JSXStyled = styled.div`
// background: green;

// h1{
//     color: blue;
//     text-align: center;
//     padding: 20px 0px;
// }

// `

function Style () {

    return(

        // TYPICAL STYLE

<JSXStyled>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/Login' element={<Loginpage />} />
</Routes>

<Link to='/'> <button> Home </button> </Link>
<Link to='/about'> <button>About</button> </Link>
<Link to='/Login' target="blank" rel=""><FunctionalComponent1/></Link>



     <h1>THIS STYLED COMPONENTS</h1>
     <h1>THIS STYLED COMPONENTS</h1>
     <h1>THIS STYLED COMPONENTS</h1>

    </JSXStyled> 

    )
    
} 

export default Style