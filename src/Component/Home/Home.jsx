
import Add from "../AddProduct/add";
import CategoryProduct from "../Category/CategoryProduct";
import ExploreMost from "../ExploreMost/ExploreMost";
import FeaturedProduct from "../Featured/FeaturedProduct";
import Review from "../Review/Review";
import SellSocialMedia from "../SellSocialMedia/SellSocialMedia";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           
            <Banner />
            <TrendingProduct />
            <CategoryProduct />
            <FeaturedProduct/>
            <ExploreMost/>
            <SellSocialMedia />
            <Review/>
        </div>
    );
};

export default Home;