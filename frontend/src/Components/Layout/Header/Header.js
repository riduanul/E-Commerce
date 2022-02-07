import React from 'react';
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar.js';
import Home from '../Home/Home.js'



const Header = () => {
   
    return (
        <div>
          
           <Navbar/>
           <Home/>
           <Footer/>
            
        </div>
    );
};

export default Header;