import {BsArrowRight} from 'react-icons/bs'

const Text = ({tittle,subTittle}) => {
    return (
        <div className='lg:w-1/2 mr-36 text-left ml-24'>
      <h1 className="tittle ">{tittle}</h1>
      <p className="pb-6 sub-tittle text-left">{subTittle}</p>
      <button className="font-bold flex justify-center items-center">See all <BsArrowRight size='20px' className='ml-2'/></button>
    </div>
    );
};

export default Text;