
import ExploreMost from "../ExploreMost/ExploreMost";
import SellSocialMedia from "../SellSocialMedia/SellSocialMedia";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           
            <Banner />
            <TrendingProduct />
            <ExploreMost/>
            <SellSocialMedia/>
        </div>
    );
};

export default Home;