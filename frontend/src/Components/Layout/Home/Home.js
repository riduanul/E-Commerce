import React, { Fragment, useEffect } from 'react';
import './Home.css'
import {CgMouse} from 'react-icons/cg';
import MetaData from '../../MetaData';
import {clearErrors, getProduct} from '../../../Actions/ProductAction';
import {useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';
import ProductCard from '../ProductCard/ProductCard.js';

const Home = () => {

    const alert = useAlert();
const dispatch = useDispatch();
const {loading, error, products, producstCount} = useSelector(state => state.products)

useEffect(()=>{
    if(error){
        alert.error(error)
        dispatch(clearErrors())
    }
    dispatch(getProduct());
},[dispatch, error, alert])

    return (
<Fragment>
{loading ? <Loader/> : <Fragment>
          <MetaData title="ECOMMERCE"/>

            <div className="banner">
            <p>Welcome to E-Commerce</p>
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
    {products && products.map(product => (
        <ProductCard key={product._id} product = {product}/>
    ))}

</div>

      </Fragment>}
</Fragment>
    );
};

export default Home;