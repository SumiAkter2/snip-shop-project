import bgImg from "../../assets/images/sell-social/bg.png";
import boy from "../../assets/images/sell-social/boy.png";
import watch from "../../assets/images/sell-social/watch.png";
import shoe from "../../assets/images/sell-social/shoe.png";
import sunglass from "../../assets/images/sell-social/sunglass.png";
import Text from "../Share/Text";

const SellSocialMedia = () => {
  return (
    <div>
      {/* <div className="hero pb-12"> */}
      <div className="lg:flex  justify-center items-center">
        <Text
          tittle={"Sell Easily on Socialmedia"}
          subTittle={
            "Life is hard enough already. Let us  make it a little easier."
          }
        ></Text>
        <div className="lg:w-1/2">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <div className="  bg-opacity-60 "></div>
            {/* content */}
            <div className="hero-content text-center ">
              <div className=" relative">
                <img src={boy} alt="boy Img" className="w-64 " />
                <div className="flex gap-x-5 bottom-[-90px] left-[-60px] absolute">
                  <img src={sunglass} alt="boy Img" className="w-20 lg:w-32" />
                  <img src={watch} alt="boy Img" className="w-20 lg:w-32" />
                  <img
                    src={shoe}
                    alt="boy Img"
                    className="w-20 lg:w-32 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SellSocialMedia;
