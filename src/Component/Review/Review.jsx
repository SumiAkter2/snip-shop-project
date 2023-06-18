import bg from '../../assets/images/ReviewPage/base (1).png';
import emoji from '../../assets/images/ReviewPage/37 11.png';
import Carousel from '../Share/Carousel';
import {  carouselInfo } from '../Share/Info';

const Review = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2'>
                    <img src={bg}className="lg:max-w-lg max-w-sm rounded-lg " />
                </div>
   
      <div className="carousel lg:w-1/2 ">
        {carouselInfo.map((slide) => (
            <Carousel key={slide.id} slide={slide} ></Carousel>
        ))}
    
    </div>
  </div>
</div>
    );
};

export default Review;