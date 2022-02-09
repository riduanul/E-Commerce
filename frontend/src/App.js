import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header/Header';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Footer from './Components/Layout/Footer/Footer';
import Loader from './Components/Layout/Loader/Loader'


function App() {
  
  useEffect(()=>{
    WebFont.load({
      google: {
        families:["Roboto", "Droid Sans"]
      }
    })
  },[])
 
  return (
    <Routes>
               <Route path="/" element={<Header/>}/>
               
               
    </Routes>

  );
}

export default App;
