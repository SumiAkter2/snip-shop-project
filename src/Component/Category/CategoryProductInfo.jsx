import addImg from '../../assets/images/category/Vector (1).png';

const CategoryProductInfo = ({product}) => {
    return (
        <div className='w-52 mx-auto mt-20 rounded-md'>
            <img src={product.images[2]} alt="product-img" className="w-48 h-32 rounded-md" />
            <div className='w-48'>
                 <h1 className="font-bold mt-4">{product.title} </h1>
            <div className='flex justify-between mt-6'>
                    <div className='flex gap-x-3 items-center'>
                         <p>$ {product.price}</p><p className='text-error text-xs'> {product.discountPercentage}% OFF</p>
                   </div>
                    <button><img src={addImg} alt="" /> </button>
            
            </div>
           </div>
        </div>
    );
};

export default CategoryProductInfo;