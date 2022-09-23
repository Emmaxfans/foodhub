import React from 'react'
import '../App.css';

export default function Buttonapp ({props}) {
  return (

    <span className=''>
        <a href='/#'><button className='button3'><i class="fa-brands fa-google-play icon-apple"></i><p>Playstore</p></button></a>
        <a href='/#'><button className='button3'><i className="fa-brands fa-apple icon-apple" ></i><p>App Store</p></button></a>
    </span>
    
  )
}
