import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import { useEffect, useState } from "react";
import FeaturedProductInfo from "./FeaturedProductInfo";
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const FeaturedProduct = () => {
 
     const [featureProducts,setFeatureProducts]=useState([])
     useEffect(() => {
       fetch('https://dummyjson.com/products/category/fragrances')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeatureProducts(data.products)
           });
    },[])
    return (
        <div>
            <h1 className="tittle pt-32">Featured Product For <br /> Pre-Order</h1>
            <p className="sub-tittle flex items-center justify-end">Discover Our Products <HiOutlineArrowNarrowRight /></p>
            
            <div className="grid lg:grid-cols-4 mx-auto my-auto">
                <div className="flex cursor-pointer gap-x-6 my-auto mx-auto">
                    <MdKeyboardArrowLeft size='25px' />
                    <IoIosArrowDroprightCircle size='25px'/>
       </div>
                {
                   featureProducts.slice(0,3).map(product=><FeaturedProductInfo key={product.id} product={product}></FeaturedProductInfo>) 
                }
            </div>
        </div>
    );
};

export default FeaturedProduct;