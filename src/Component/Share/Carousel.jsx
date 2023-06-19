import emoji from "../../assets/images/ReviewPage/37 11.png";

const Carousel = ({ slide, children }) => {
  const { img, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full lg:h-96 mb-12">
      <div className="carousel-img">
        <img src="" alt="" className=" rounded-xl " />
      </div>
      <div className="absolute text-left  transform -translate-y-1/2 left-24 top-1/4">
        <div>
          <div className="flex ">
            <h1 className=" text-xl font-bold ">Justin Pierre</h1>
            <img src={emoji} alt="emoji" />
          </div>

          <small>Products Seller</small>
        </div>
      </div>

      <div className="absolute text-left transform -translate-y-1/2 left-24 top-1/2 w-1/2">
        <p className="lg:text-sm text-xs mt-6 italic ">
          “In 2 years, my business went from just me and my
          <br />Shop site to 40
          employees, my own fulfillment center <br />and over 22 million dollars in
          revenue.”
        </p>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  bottom-8">
        <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-primary">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;
