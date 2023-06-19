
import UseHook from "../../Hook/UseHook";
import CategoryProductInfo from "./CategoryProductInfo";
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const CategoryProduct = () => {
    const [products] = UseHook();
    return (
        <div className="mx-16">
            <h1 className="tittle text-left">Shop by Category</h1>
           
            <div className=" flex justify-between transform -translate-y-1/2 ">
                 <p className="sub-tittle text-left">Life is hard enough already. Let us make it a little easier.</p>
                <div className="flex cursor-pointer gap-x-6">
                    <MdKeyboardArrowLeft size='25px' />
                    <IoIosArrowDroprightCircle size='25px'/>
       </div>
      </div>
            <div className="grid lg:grid-cols-3 m-12">
                {
                    products.map(product=><CategoryProductInfo key={product.id} product={product}></CategoryProductInfo>)
                }
            </div>
        </div>
    );
};

export default CategoryProduct;