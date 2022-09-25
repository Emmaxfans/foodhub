import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
// import Loginsignup from "./components/Loginpage"
// import signup from './components/Signup';
// import Style from './components/Style';
import App from './App';

// import { Router } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
// import Loginpage from './components/Loginpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Loginpage />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    {/* <Style /> */}
    </Router>
 

    {/* <Loginsignup /> */}
    {/* <Signup /> */}
    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
