

const TrendingProductInfo = ({product}) => {
    return (
      
            
    <div className=" trendingInfo-bg h-36 relative my-12 ">
   
    <img src={product.img} alt="product-img"  className="lg:h-48 absolute top-[-40px] right-[-5px]"/>
    <div className="text-left p-4 ">
      <h1 className="text-xl font-bold">{product.name}</h1>
                    <p>Starting</p>
                    <p className="text-error mt-4">${product.price}</p>
    </div>
    </div>
   
    );
};

export default TrendingProductInfo;