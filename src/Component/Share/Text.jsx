import {BsArrowRight} from 'react-icons/bs'

const Text = ({tittle,subTittle}) => {
    return (
        <div className='lg:w-1/2 mr-36 text-left'>
      <h1 className="tittle font-bold">{tittle}</h1>
      <p className="pb-6 sub-tittle text-left w-1/2">{subTittle}</p>
      <button className="font-bold flex justify-center items-center">See all <BsArrowRight size='20px' className='ml-2'/></button>
    </div>
    );
};

export default Text;