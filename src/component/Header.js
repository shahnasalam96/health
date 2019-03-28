import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() 
{
    return(
      <div className="navbar">
        <Link to="/login">Login</Link>   
        <Link to="/register"> Registration </Link>

          {/* <div class="dropdown">
              <button class="dropbtn">Registration 
              <i class="fa fa-caret-down"></i>
              </button>

          <div class="dropdown-content">
              <Link to="/doctorreg"> DOCTOR </Link>
              <Link to="hospitalreg">HOSPITAL</Link>
              <Link to="labreg">LABORATORY</Link>
              <Link to="/patientreg"> PATIENT </Link>   

          </div>
        </div>  */}

              <a href="contactus">Contact Us</a>
              <a href="gallery">Gallery</a>
              <a href="about">About</a>
              <Link to="/"> Home </Link>    
                        
      </div>
    );

}