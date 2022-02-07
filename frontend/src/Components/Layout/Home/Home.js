import React, { Fragment } from 'react';
import './Home.css'
import {CgMouse} from 'react-icons/cg';
import Product from "../Product/Product.js"

const product = {
    name: "Blue t-shirt",
    images:[{url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "$300",
    _id:"riduanul"

}
const Home = () => {
    return (
      <Fragment>
            <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
                <button>
                        <span>
                        Scroll<CgMouse/>
                        </span>
                </button>
            </a>
        </div>

        <h2 className='homeHeading'> Featured Products</h2>
<div className="container" id='container'>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>
    <Product product={product}/>

</div>

      </Fragment>
    );
};

export default Home;