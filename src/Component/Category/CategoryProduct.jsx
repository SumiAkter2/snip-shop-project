
import UseHook from "../../Hook/UseHook";
import CategoryProductInfo from "./CategoryProductInfo";
import {IoMdArrowDroprightCircle} from 'react-icons/io'
import {IoMdArrowDropleftCircle} from 'react-icons/io'

const CategoryProduct = () => {
    const [products] = UseHook();
    return (
        <div className="">
            <h1 className="tittle text-left">Shop by Category</h1>
           
            <div className=" flex justify-between transform -translate-y-1/2 ">
                 <p className="sub-tittle text-left">Life is hard enough already. Let us make it a little easier.</p>
                <div className="flex cursor-pointer">
                    <IoMdArrowDroprightCircle size='25px' />
                    <IoMdArrowDropleftCircle size='25px'/>
       </div>
      </div>
            <div className="grid lg:grid-cols-3 mx-auto">
                {
                    products.slice(7,16).map(product=><CategoryProductInfo key={product.id} product={product}></CategoryProductInfo>)
                }
            </div>
        </div>
    );
};

export default CategoryProduct;