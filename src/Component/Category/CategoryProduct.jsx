
import UseHook from "../../Hook/UseHook";
import CategoryProductInfo from "./CategoryProductInfo";


const CategoryProduct = () => {
    const [products] = UseHook();
    return (
        <div className="text-left">
            <h1 className="tittle">Shop by Category</h1>
            <p className="sub-tittle text-left">Life is hard enough already. Let us make it a little easier.</p>
            <div className="grid lg:grid-cols-3 mx-auto">
                {
                    products.slice(7,16).map(product=><CategoryProductInfo key={product.id} product={product}></CategoryProductInfo>)
                }
            </div>
        </div>
    );
};

export default CategoryProduct;