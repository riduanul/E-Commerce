import React from 'react';
import {FaCartPlus, FaUserCircle} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link" href="#">About</a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >Contact</a>
        </li>
      </ul>
      <div className='icons d-flex justify-content-end'>
      <input className="form-control " width='50' type="search" placeholder="Search" aria-label="Search"/>
        <button className='btn btn-nav'>
        <FiSearch/>
        </button>
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