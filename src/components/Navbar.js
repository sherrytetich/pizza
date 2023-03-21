import React from "react";
import Logo from "../assets/pizzalogo.webp";
import {Link} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
       <div className="leftSide">
        <img src={Logo } />
       </div>
       <div className="rightSide"></div> 
       <Link to='/'>Home </Link>
       <Link to='/menu'>Menu </Link>
       <Link to='/about'>About </Link>
       <Link to='/contact'>Contact </Link>
       <button>
        <ReorderIcon/>
       </button>
    </div>
  );
}

export default Navbar;
