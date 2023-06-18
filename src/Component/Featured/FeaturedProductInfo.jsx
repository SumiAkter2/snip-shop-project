

const FeaturedProductInfo = ({product}) => {
    return (
        <div>
             <div className='w-52 mx-auto mt-20 rounded-md'>
            <img src={product.images[2]} alt="product-img" className="w-64 h-60 rounded-md" />
            <div className='w-48'>
                 <h1 className="font-bold mt-4">{product.title} </h1>
            
                    
                        <p className="text-sm my-4">{product.brand}</p>
                         <p className="font-bold">$ {product.price} USD </p>
                  
                    <button className="btn btn-accent text-white rounded-full bg-[#001439] mt-4 w-48">Order Now </button>
            
            </div>
           </div>
        </div>
       
    );
};

export default FeaturedProductInfo;