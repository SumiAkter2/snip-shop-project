

const TrendingProductInfo = ({product}) => {
    return (
        <div className="">
            <h1>{product.title} </h1>
            <img src={product.images[2]} alt="" />
           
        </div>
    );
};

export default TrendingProductInfo;