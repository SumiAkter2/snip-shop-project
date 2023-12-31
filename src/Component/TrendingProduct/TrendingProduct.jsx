import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { trendingSellInfo } from "../Share/Info";
import "./TrendingProduct.css";

const TrendingProduct = () => {
  return (
    // =============heading
    <div className="trending-section py-28">
      <h1 className="tittle">Shop Our Trending Products</h1>
      <p className="sub-tittle mt-12 lg:mt-0">
        Life is hard enough already. Let us make it a <br /> little easier
      </p>

      <div className="flex justify-center items-center gap-x-4">
        <a className="link link-hover mt-12 font-bold" href="/">
          Fashion
        </a>
        <a className="link link-hover mt-12 font-bold" href="/">
          Technology
        </a>
        <a className="link link-hover mt-12 font-bold" href="/">
          Interiors
        </a>
        <a className="link link-hover mt-12 font-bold" href="/">
          Food & Drink
        </a>
      </div>
      {/*Trending  product  slider */}
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={4}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper "
        >
          {trendingSellInfo.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" trendingInfo-bg  relative my-12 lg:w-60 w-48 gap-x-5">
                <img
                  src={product.img}
                  alt="product-img"
                  className="h-48 absolute top-[-40px] right-[-5px]"
                />
                <div className="text-left p-4 ">
                  <h1 className="text-xl font-bold">{product.name}</h1>
                  <p>Starting</p>
                  <p className="text-error mt-4">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingProduct;
