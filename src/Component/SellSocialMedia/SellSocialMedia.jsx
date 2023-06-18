import bgImg from '../../assets/images/sell-social/bg.png';
import boy from '../../assets/images/sell-social/boy.png';
import watch from '../../assets/images/sell-social/watch.png';
import shoe from '../../assets/images/sell-social/shoe.png';
import sunglass from '../../assets/images/sell-social/sunglass.png';

const SellSocialMedia = () => {
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='lg:w-1/2'><div className="hero min-h-screen" style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
      }}>
  <div className="  bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md relative">
                                <img src={boy} alt="boy Img" />
                                <div className='flex gap-x-5 bottom-[-90px] left-[-60px] absolute'>
                                    <img src={sunglass} alt="boy Img" />
                                    <img src={watch} alt="boy Img" />
                                    <img src={shoe} alt="boy Img" className='rounded-lg' /> 
                                </div>
      {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div></div>
    <div className='lg:w-1/2 mr-36 text-left'>
      <h1 className="tittle font-bold">Sell Easily on Socialmedia</h1>
      <p className="py-6">Life is hard enough already.  Let us  <br />make it a little easier.</p>
      <button className="font-bold ">See all</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SellSocialMedia;