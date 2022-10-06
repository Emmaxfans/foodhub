import React from "react";
import '../App.css'
import FunctionalComponent, {FunctionalComponent1, FunctionalComponent2, FunctionalComponent3} from './FunctionalComponent';
import { Link } from "react-router-dom";

export default function LandingPage() {

    return(

    <div className="App">
      
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
  <li className="nav-item px-3">
  <Link  to='/Login' className="nav-link fs-font">Login</Link>
  </li>

  <li className="nav-item px-3 signup2">
  <Link  to='/Sign-Up' className="nav-link fs-font ">Sign Up</Link>

  </li>

  <li className="nav-item px-3">
    <Link to='Sign-Up' className="nav-link text-white"><FunctionalComponent1/></Link>
  </li>

 
</ul>
</div>
</div>
</nav>

</div>

{/* Main body */}


<div className="container con-1">
<div className="row">
<div className="col-lg-6 md-6 sm-6 con-2">
<div className='col-margin'>
<h3 className='con-h1'>Order food anytime, <br/> anywhere</h3>
<p className='con-p1'>Browse from list of our special food to place order and have food delivered to you in no time. Affordable, tasty and fast.</p>
<FunctionalComponent2 />
</div>

</div>

<div class="col-lg-6 md-6 sm-6 con-img">
<img className='img1a img-fluid' src='.\foodhub\bon-vivant-qom5MPOER-I-unsplash 1.png' alt='foodhub1'/>
</div>

</div>

</div>

<center className='center-margin'>
<header className='header1'>
Special Meal Of The Day
</header>
<p className='p2'>Check our special meal of the day and get discounts on all our meals <br/> and swift delivery to whatever location within Abeokuta.</p>

</center>

<div className="container">
<div className="row align-items-start text-primary">
<div className="col">
<Link to='Order'>
<img className='img2 img-fluid' src='.\foodhub\bon-vivant-qom5MPOER-I-unsplash 2.png' alt='foodhub2'/>
</Link>
<div className='con-center'>
<h3>Stir fry pasta</h3>
<p>Stir fry pasta yadaa yadaa</p>
</div>

</div>

<div class="col">
<Link to='Order'>
<img className='img2 img-fluid' src='.\foodhub\bon-vivant-qom5MPOER-I-unsplash 3.png' alt='foodhub2'/>
</Link>
<div className='con-center'>
<h3>Stir fry pasta</h3>
<p>Stir fry pasta yadaa yadaa</p>
</div>
</div>
<div className="col">
<Link to='Order'>
<img className='img2 img-fluid' src='.\foodhub\bon-vivant-qom5MPOER-I-unsplash 4.png' alt='foodhub2'/>
</Link>
<div className='con-center'>
<h3>Stir fry pasta</h3>
<p>Stir fry pasta yadaa yadaa</p>
</div>
</div>
</div>

</div>



<div className="container con-mt">
<div className="row">
<div className="col-6 con-mt1">

<div className='con-b'>
<h3 className=''>Get notified when we have Update!</h3>
<p className='ppp'>Get notified when we add new items to our special menu, <br/> update our price list of special promos!</p>
</div>


</div>

<div class="col-6 func-con">

<div class="">
<form class="d-flex">
<input class="form-control input-pro" type="search" placeholder="Search" aria-label="Search"/>

<FunctionalComponent />
</form>
</div>


</div>

</div>

</div>



{/* Footer */}
<div>
  <footer className='bg-footer'>

<div className='tab-margin'>

<table className="table table table-borderless text-center text-white">
<thead className="">
<tr cl>
<th scope="col" className=''>Company</th>
<th scope="col">Support</th>
<th scope="col">Legal</th>
<th scope="col">Install App</th>
</tr>
</thead>

<tbody>
<tr className='td-fontsize' >
<td>About foodhub</td>
<td>Help Center</td>
<td>Cookies Policy</td>
<td rowspan="2"><FunctionalComponent3 /></td>
</tr>

<tr className='td-fontsize'>
<td>Foodhub Career</td>
<td>Safety Center</td>
<td>Privacy Policy</td>
</tr>

{/* <tr>
<td>Thornton</td>
<td>Thornton</td>
<td>Thornton</td>
<td></td>
</tr> */}

</tbody>
</table>

</div>

<div className='hr-footer'><hr/></div>

<div className="container">
<div className="row">

<div className="col-6">
<p className='px-3 pxp'>2022 FOODHUB, All right reserved</p>
</div>

<div class="col-6">
<div className='icon-margin'>
<a className="" href="/#"><img className='img3 img-fluid' src='.\foodhub\instagram (4).png' alt='ig'/></a>
<a className="" href="/#"><img className='img4 img-fluid' src='.\foodhub\twitter (1).png' alt='ig'/></a>
<a className="" href="/#"><img className='img4 img-fluid' src='.\foodhub\facebook (2).png' alt='ig'/></a>
<a className="" href="/#"><img className='img4 img-fluid' src='.\foodhub\youtube (1).png' alt='ig'/></a>
</div>  
</div>
</div> 
</div>    

</footer>
</div>

</div>

    );
    
}