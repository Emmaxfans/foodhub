import React from "react";
import '../App.css'
import { FunctionalComponent3} from './FunctionalComponent';
// import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
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

    );

}

export default Footer