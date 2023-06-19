import AddProduct from '../AddProduct/AddProduct';
import { carouselInfo } from '../Share/Info';

const Banner = () => {
    return (
      <div className="carousel w-full text-white">
        {carouselInfo.map((slide) => (
          <AddProduct key={slide.id} slide={slide}></AddProduct>
        ))}
      </div>
    );
};

export default Banner;