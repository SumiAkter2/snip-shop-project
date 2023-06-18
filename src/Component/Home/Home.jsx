
import ExploreMost from "../ExploreMost/ExploreMost";
import Review from "../Review/Review";
import SellSocialMedia from "../SellSocialMedia/SellSocialMedia";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           
            <Banner />
            <TrendingProduct />
            <ExploreMost/>
            <SellSocialMedia />
            <Review/>
        </div>
    );
};

export default Home;