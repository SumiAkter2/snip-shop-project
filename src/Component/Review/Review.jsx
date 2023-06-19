import bg from '../../assets/images/ReviewPage/base (1).png';
import emoji from '../../assets/images/ReviewPage/37 11.png';
import Carousel from '../Share/Carousel';
import {  carouselInfo } from '../Share/Info';

const Review = () => {
    return (
      <div className=" ">
        <div className="lg:flex justify-center items-center">
          
            <img src={bg} className=" rounded-lg lg:w-1/2 w-60 " />
          

          <div className="carousel lg:w-1/2 ">
            {carouselInfo.map((slide) => (
              <Carousel key={slide.id} slide={slide}></Carousel>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Review;