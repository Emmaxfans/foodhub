import React from 'react'
import '../orderpage.css'




const ContainerCard = (props) => {
  return (
    <div className='column'>
    <div className='colum-con'>
      <div className='text-center mt-5 '>
        <img src= {props.img} alt={props.alt} className='img-props'/>
        <h4 className=''>{props.foodname}</h4>
        <p className='p111'>{props.p1}</p>
      </div>

      <div className="mt-5">
          <p className='price'>{props.price}</p>
          <small className="text-muted cart"><a href='/#'>{props.cart}</a></small>
      </div>
      </div>
    </div>
  )
}

export default ContainerCard