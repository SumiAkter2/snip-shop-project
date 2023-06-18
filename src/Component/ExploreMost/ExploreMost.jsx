import bg from '../../assets/images/exploreMost/bg.png';
import addidas from '../../assets/images/exploreMost/addidas.png';
import bmw from '../../assets/images/exploreMost/bmw.png';
import tik from '../../assets/images/exploreMost/tik.png';
import mi from '../../assets/images/exploreMost/mi.png';
import fila from '../../assets/images/exploreMost/fila.png';
import apple from '../../assets/images/exploreMost/apple.png';
import Text from '../Share/Text';

const ExploreMost = () => {
    return (
        <div>
             <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2'><div className="hero min-h-screen" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
      }}>
  <div className="  bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content">
                                <div className='grid grid-cols-3 gap-3'>
                                <img src={apple} alt="brand-logo" />
                                <img src={bmw} alt="brand-logo" />
                                <img src={tik} alt="brand-logo" />
                                <img src={fila} alt="brand-logo" />
                                <img src={mi} alt="brand-logo" />
                                <img src={addidas} alt="brand-logo" />
                                </div>              
  </div>
</div></div>
   <Text tittle={'Explore Most Popular Brands'} subTittle={'Life is hard enough already. Let us  make it a little easier.'}></Text>
  </div>
</div> 
        </div>
        </div>
    );
};

export default ExploreMost;