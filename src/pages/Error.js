import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Error = ()=>{
    return(
        <div className="error">

            <h1 className="error-h1">Not Found</h1>
            <Link className="error-link" to="/" >Click here to go to homepage</Link>
       
        </div>
    );

}

export default Error