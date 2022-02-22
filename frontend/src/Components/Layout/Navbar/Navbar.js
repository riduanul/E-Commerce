import React from 'react';
import {FaCartPlus, FaUserCircle} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink  to ='/' className="navbar-brand" >E-Commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li>
        <NavLink to='/'  className="nav-item">
          Home
          </NavLink>
        </li>
        <li >
          <NavLink to='/products' className="nav-item">
          Products
          </NavLink>
        </li>
        <li >
        <NavLink to='/contact' className="nav-item">
          Contact
          </NavLink>
         
        </li>
        <li>
        <NavLink to='/about'  className="nav-item">
          About
          </NavLink>
        </li>
      </ul>
      <div className='icons d-flex justify-content-end'>
       <NavLink to="/search">
         <button className='btn btn-nav'>
        <FiSearch/>
        </button>
        </NavLink>
        <button className='btn btn-nav'>
        <FaCartPlus/>
        </button>
        <button className='btn btn-nav'>
        <FaUserCircle/>
        </button>
        </div>
       
      
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;