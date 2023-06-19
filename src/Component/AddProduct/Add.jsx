import { carouselInfo } from "../Share/Info";
import AddProduct from "./AddProduct";


const Add = () => {
    return (
        <div className="carousel w-full text-white">
        {carouselInfo.map((slide) => (
          <AddProduct key={slide.id} slide={slide}></AddProduct>
        ))}
      </div>
    );
};

export default Add;