

const TrendingProductInfo = ({product}) => {
    return (
      
            
    <div className="hero trendingInfo-bg">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={product.images[2]} alt="product-img"  className="lg:h-44 "/>
    <div className="text-left">
      <h1 className="text-sm font-bold">{product.title}</h1>
                    <p>Starting</p>
                    <p>${product.price}</p>
    </div>
    </div>
    </div>
    );
};

export default TrendingProductInfo;