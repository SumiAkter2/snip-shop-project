import addImg from '../../assets/images/category/Vector (1).png';

const CategoryProductInfo = ({product}) => {
    return (
        <div className='w-52 mx-auto mt-20 rounded-md'>
            <img src={product.images[2]} alt="product-img" className="w-48 h-32 rounded-md" />
            <div className='w-48'>
                 <h1 className="font-bold mt-4">{product.title} </h1>
            <div className='flex justify-between mt-6'>
                    <p>$ {product.price}</p>
                    <button><img src={addImg} alt="" /> </button>
            
            </div>
           </div>
        </div>
    );
};

export default CategoryProductInfo;