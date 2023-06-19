import { carouselInfo } from '../Share/Info';
import BannerInfo from './BannerInfo';

const Banner = () => {
    return (
      <div className="carousel w-full text-white">
        {carouselInfo.map((slide) => (
          <BannerInfo key={slide.id} slide={slide}></BannerInfo>
        ))}
      </div>
    );
};

export default Banner;