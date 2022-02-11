import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header/Header';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Footer from './Components/Layout/Footer/Footer';
import Loader from './Components/Layout/Loader/Loader'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Home from './Components/Layout/Home/Home';
import {Fragment} from 'react';
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
               </Routes>
         
        <Footer/>
    </Fragment>
    

  );
}

export default App;
