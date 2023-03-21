import React from "react";
import Logo from "../assets/pizzalogo.webp";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
       <div className="leftside">
        <img src={Logo } />
       </div>
       <div className="rightside"></div> 
       <Link>Home Page</Link>
    </div>
  );
}

export default Navbar;
