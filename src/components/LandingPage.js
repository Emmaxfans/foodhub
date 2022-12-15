import React from "react";
import '../App.css'
import FunctionalComponent, {FunctionalComponent2} from './FunctionalComponent';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from "react";

// import axios from "axios";

export default function LandingPage() {

    // post request for email subscription

    const [formemail, setFormemail] = useState("");

const subscribeInput =(e) =>{
    const { name,value }= e.target;
    setFormemail({...formemail, [name]:value});
    console.log(formemail);
}

const subscribe = async (e) =>{
    e.preventDefault();
    console.log(formemail);
    // try{
    //     const res= await axios.post('https://vendlify-api.onrender.com/api/v1/users/signup', formemail)
    //     console.log(res)
    //     if (res.status === 200){
    //         document.getElementById("subscribe").innerHTML = "successfully subscribe"
    //     }

    //     else{
    //         document.getElementById("submit").innerHTML = "Error can not subscribe"
    //     }
        
    // }catch(err){

    // }
}

    return(

<div className="App">

<Nav/>

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
<img className='img111 img-fluid' src='.\foodhub\bon-vivant-qom5MPOER-I-unsplash 1.png' alt='foodhub1'/>
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
<Link to='Form'>
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
<h3 className=''>Get notified when we have Updates!</h3>
<p className='ppp'>Get notified when we add new items to our special menu, <br/> update our price list of special promos!</p>
</div>


</div>

<div class="col-6 func-con">

<div class="">
<form class="d-flex" onSubmit={subscribe}>
<input class="form-control input-pro" type="email" name="subscriber" value={subscribeInput.subscriber} onChange={subscribeInput} id="subscribe" placeholder="Email" aria-label="Search" />

<FunctionalComponent />
</form>
</div>


</div>

</div>

</div>



{/* Footer */}

<Footer/>

</div>

    );
    
}