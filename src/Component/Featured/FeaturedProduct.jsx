import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
// import FeaturedProductInfo from "./FeaturedProductInfo";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const FeaturedProduct = () => {
  const [featureProducts, setFeatureProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/fragrances")
      .then((res) => res.json())
      .then((data) => {
        setFeatureProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1 className="tittle lg:pt-32 pb-16">
        Featured Product For <br /> Pre-Order
      </h1>
      <p className="sub-tittle flex items-center lg:justify-end justify-center">
        Discover Our Products <HiOutlineArrowNarrowRight />
      </p>

      <div>
        <Swiper
          navigation={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          style={{
            "--swiper-button-next-left": "10px",
            " --swiper-navigation-size": "44px",
            "--swiper-navigation-left-offset": "50px",
            "--swiper-navigation-sides-offset": " 10px",
            "--swiper-navigation-color": "#000",
          }}
          modules={[Navigation]}
          className="mySwiper mx-12"
        >
          {featureProducts.map((product) => (
            <SwiperSlide key={product.id} className="px-12">
              <div className="w-52 mx-auto mt-20 rounded-md">
                <img
                  src={product.images[2]}
                  alt="product-img"
                  className="w-64 h-60 rounded-md"
                />
                <div className="w-48">
                  <h1 className="font-bold mt-4">{product.title} </h1>

                  <p className="text-sm my-4">{product.brand}</p>
                  <p className="font-bold">$ {product.price} USD </p>

                  <button className="btn btn-accent text-white rounded-full bg-[#001439] mt-4 w-48">
                    Order Now{" "}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProduct;
