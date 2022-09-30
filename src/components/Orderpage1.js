import React from 'react';
import '../orderpage.css'
import data from './Containerdata';
import ContainerCard from './ContainerCard';


export default function Orderpage1 () {
  const dataSet = data.map(function(items){
    return(
      <ContainerCard
      {...items}/>
    )
  })

  return (

    <div className='con-body'>

    <div className="d-flex flex-column flex-shrink-0 p-3 position-fixed con1" >
    <a href="/#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" style={{width:"40", height:"32"}}></svg> */}
      <img className='img1' src='.\foodhub\bibimbap.png' alt='food-order'/>
      <span className=" text-dark foodhub-span">FOODHUB</span>
    </a>
    <hr/>

    <ul className="nav flex-column mb-auto ul-margin">
      <li className="nav-item">
        <a href="/#" className="nav-link text-dark">
          {/* <svg class="bi pe-none me-2" style={{width:"16", height:"16"}}></svg> */}
          Home
        </a>
      </li>
      <li>
        <a href="/#" className="nav-link  text-dark">
          {/* <svg className="bi pe-none me-2" style={{width:"16", height:"16"}}></svg> */}
          Dashboard
        </a>
      </li>
      <li>
        <a href="/#" className="nav-link text-dark">
          {/* <svg className="bi pe-none me-2" style={{width:"16", height:"16"}}></svg> */}
          Orders
        </a>
      </li>
      <li>
        <a href="/#" className="nav-link text-dark">
          {/* <svg className="bi pe-none me-2" style={{width:"16", height:"16"}}></svg> */}
          Products
        </a>
      </li>
      <li>
        <a href="/#" className="nav-link text-dark">
          {/* <svg className="bi pe-none me-2" style={{width:"16", height:"16"}}></svg> */}
          Customers
        </a>
      </li>
    </ul>
  </div>
  

 <div className='con-row1'>
 
  
   <div className="row">
   <div className='center-none'>
   <h2>Good day, Marie Cruz</h2>
   <p>What meal are you craving for today?</p>
   </div>

    {dataSet}
 
   </div>
  </div>


 </div>


  )
}
