import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header/Header';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Footer from './Components/Layout/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Home from './Components/Layout/Home/Home';
import {Fragment} from 'react';
import Products from './Components/Products/Products.js';
import Search from './Components/Products/Search.js';

function App() {
  
  useEffect(()=>{
    WebFont.load({
      google: {
        families:["Roboto", "Droid Sans"]
      }
    })
  },[])
 
  return (
    
      <Fragment>
        <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/product/:id" element={<ProductDetails/>}/>
                  <Route exact path="/products" element={<Products/>}/>
                  <Route path="/products/:keyword" element={<Products/>}/>
                  <Route path="/search" element={<Search/>}/>
               </Routes>
         
        <Footer/>
    </Fragment>
    

  );
}

export default App;
