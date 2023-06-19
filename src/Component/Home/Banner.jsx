import bg from '../../assets/images/banner/base.png';
import bannerImg1 from '../../assets/images/banner/bigCamera.png';
import bannerImg2 from '../../assets/images/banner/camera1.png';
import bannerImg3 from '../../assets/images/banner/camera2.png';

const Banner = () => {
    return (
        <div className=" lg:h-[570px] "
           style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
      }}
        >
        <div className=" bg-opacity-60"> </div>
        <div className='hidden lg:flex justify-center items-center gap-x-4 text-xs  pt-4 pb-12'>
         <a className="link link-hover">Jewelry & Accessories</a> 
         <a className="link link-hover">Clothing & Shoes</a> 
         <a className="link link-hover">Home & Living</a> 
         <a className="link link-hover">Wedding & Party</a> 
         <a className="link link-hover">Toys & Entertainment</a> 
         <a className="link link-hover">Art & Collectibles</a> 
         <a className="link link-hover">Craft Supplies & Tools</a> 
         <a className="link link-hover">Copy
Vintage
</a> 
        </div>
        
  <div className="hero lg:px-32 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex lg:justify-center  lg:w-1/2'>
              <img src={bannerImg1} className="max-w-sm rounded-full lg:w-80 w-44" />
              <div>
                <img src={bannerImg2} className="max-w-sm rounded-full " /><img src={bannerImg3} className="max-w-sm rounded-full  lg:pt-12 pl-4" />
              </div>
   </div>
            <div className='text-left lg:w-1/2 '>
              <p className='pb-4 text-sm'>100% QUALITY, 100% SATISFACTION</p>
      <h1 className="tittle lg:text-6xl">Where the world comes to shop.</h1>
      <p className="lg:pt-20 pt-12 sub-tittle text-left">Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
      <button className="btn bg-[#2B2B2B] btn-info uppercase rounded-full w-36 mt-12">Shop Now</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Banner;