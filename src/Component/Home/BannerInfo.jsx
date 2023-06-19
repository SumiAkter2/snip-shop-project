import bannerImg1 from "../../assets/images/banner/bigCamera.png";
import bannerImg2 from "../../assets/images/banner/camera1.png";
import bannerImg3 from "../../assets/images/banner/camera2.png";
import dot from "../../assets/images/banner/dot.png";

const BannerInfo = ({ slide }) => {
  const { img, id, prev, next } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full h-screen mb-12 text-primary"
    >
      <div
        className=" lg:h-[570px] "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-opacity-60"> </div>
        {/* banner header */}
        <div className="hidden lg:flex justify-center items-center gap-x-4 text-xs  pt-4 pb-12">
          <a className="link link-hover">Jewelry & Accessories</a>
          <a className="link link-hover">Clothing & Shoes</a>
          <a className="link link-hover">Home & Living</a>
          <a className="link link-hover">Wedding & Party</a>
          <a className="link link-hover">Toys & Entertainment</a>
          <a className="link link-hover">Art & Collectibles</a>
          <a className="link link-hover">Craft Supplies & Tools</a>
          <a className="link link-hover">Copy Vintage</a>
        </div>
        {/*  banner content */}
        <div className="hero lg:px-32 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex lg:justify-center  lg:w-1/2">
              <img
                src={bannerImg1}
                className="max-w-sm rounded-full lg:w-80 w-36"
              />
              <div className="m-6">
                <img src={bannerImg2} className="lg:w-32 w-24 rounded-full " />
                <img
                  src={bannerImg3}
                  className="lg:w-32 w-24 rounded-full  lg:pt-12 pl-4"
                />
              </div>
            </div>
            <div className="text-left lg:w-1/2 ">
              <p className="pb-4 text-sm">100% QUALITY, 100% SATISFACTION</p>
              <h1 className="tittle lg:text-6xl">
                Where the world comes to shop.
              </h1>
              <p className="lg:pt-20 pt-12 sub-tittle text-left">
                Life is hard enough already. Let us make it a little easier,
                Vision of Snipshop for a better outlook.
              </p>
              <button className="btn bg-[#2B2B2B] btn-info uppercase rounded-full w-36 lg:mt-12 mt-6">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* slider button */}
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 lg:bottom-32 bottom-1">
        <div className="flex justify-center items-center w-full py-2 gap-2">
          <a href={`#slide${prev}`} className=" mr-5">
            PRE
          </a>
          <a href="#slide1">
            <img src={dot} alt="dot-img" />
          </a>
          <a href="#slide2">
            <img src={dot} alt="dot-img" />
          </a>
          <a href="#slide3">
            <img src={dot} alt="dot-img" />
          </a>
          <a href="#slide4">
            <img src={dot} alt="dot-img" />
          </a>
          <a href={`#slide${next}`} className="ml-5">
            NEXT
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
