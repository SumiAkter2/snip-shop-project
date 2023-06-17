import {  useEffect, useState } from 'react';
import './TrendingProduct.css'
import TrendingProductInfo from './TrendingProductInfo';

const TrendingProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch('https://dummyjson.com/products')
.then(res => res.json())
           .then(data => {
               console.log(data);setProducts(data.products)
           });
    },[])
    
    return (
        <div className='trending-section'>
            <h1 className="tittle">Shop Our Trending Products</h1>
            <p className='sub-tittle'>Life is hard enough already. Let us make it a <br /> little easier</p>
            <div className='flex justify-center items-center gap-x-4'>
            <a className='link link-hover mt-12 mb-20' href="/">Fashion</a>
            <a className='link link-hover mt-12 mb-20' href="/">Technology </a>
            <a className='link link-hover mt-12 mb-20' href="/">Interiors</a>
            <a className='link link-hover mt-12 mb-20' href="/">Food & Drink</a>

            </div>

            {products.map(product => <TrendingProductInfo key={product.id} product={product}></TrendingProductInfo>)}
        </div>
    );
};

export default TrendingProduct;