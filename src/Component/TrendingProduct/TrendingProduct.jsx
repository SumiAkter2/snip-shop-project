import {  useEffect, useState } from 'react';
import './TrendingProduct.css'
import TrendingProductInfo from './TrendingProductInfo';
import UseHook from '../../Hook/UseHook';
// import Carousel from '../Share/Carousel';

const TrendingProduct = () => {
    const [products ] = UseHook([]);
   
    
    return (
        <div className='trending-section'>
            <h1 className="tittle">Shop Our Trending Products</h1>
            <p className='sub-tittle'>Life is hard enough already. Let us make it a <br /> little easier</p>
            <div className='flex justify-center items-center gap-x-4'>
            <a className='link link-hover mt-12 font-bold' href="/">Fashion</a>
            <a className='link link-hover mt-12 font-bold' href="/">Technology </a>
            <a className='link link-hover mt-12 font-bold' href="/">Interiors</a>
            <a className='link link-hover mt-12 font-bold' href="/">Food & Drink</a>

            </div>

          <div className='grid lg:grid-cols-5 md:grid-cols-3'>
                {/* {
                    products.map(product => <TrendingProductInfo key={product.id} product={product}></TrendingProductInfo>)
               } */}
           </div> 
        </div>
    );
};

export default TrendingProduct;