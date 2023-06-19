import notFoundIMg from '../../assets/images/404.png';

const NotFound = () => {
    return (
      <div className="flex justify-center">
        <img src={notFoundIMg} alt="404-img" className="w-80"/>
      </div>
    );
};

export default NotFound;