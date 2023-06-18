
import SellSocialMedia from "../SellSocialMedia/SellSocialMedia";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           
            <Banner />
            <TrendingProduct />
            <SellSocialMedia/>
        </div>
    );
};

export default Home;