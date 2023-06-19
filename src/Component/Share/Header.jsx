
import {CiUser} from 'react-icons/ci';
import {BsSuitHeart} from 'react-icons/bs';
import {RiShoppingBagLine} from 'react-icons/ri';
import {BiSearch} from 'react-icons/bi';
import {HiMenu} from 'react-icons/hi';
import LogoName from '../../assets/images/navbar/Logo (1).png'

const Header = () => {
    return (
      
       <div className="navbar bg-accent text-white lg:px-24">
  <div className="navbar-start">
   
          <a className=" normal-case text-xl" href='/'>
            <img src={LogoName} alt="brand Name" className='w-32' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
   <div className="join relative">
  <input className="input bordered-0 rounded-3xl join-item " placeholder="Search SnipShop.com"/>
  <button className="btn border-0 bg-[#4DC3F7]  rounded-l-full rounded-r-full absolute right-[-20px] "><BiSearch color='white' size='25px'/></button>
</div>
  </div>
  <div className="navbar-end">
            <ul className="menu lg:menu-horizontal hidden ">
      <li><a><CiUser size='25px'/> Account</a></li>
      <li >
        <a>
        <BsSuitHeart size='25px'/>  My Item
        </a>
      </li>
      <li><a><label >
        <div className="indicator">
          <RiShoppingBagLine size='28px'/>
          <span className="badge badge-xs border-0 bg-[#FFC221] rounded-full  indicator-item">8</span>
        </div>
      </label></a></li>
          </ul>
           <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost ">
        <HiMenu size='30px'/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow dropdown-top bg-accent rounded-box w-52">
        <li><a><CiUser size='25px'/> Account</a></li>
      <li >
        <a>
        <BsSuitHeart size='25px'/>  My Item
        </a>
      </li>
      <li><a><label >
        <div className="indicator">
          <RiShoppingBagLine size='28px'/>
          <span className="badge badge-xs border-0 bg-[#FFC221] rounded-full  indicator-item">8</span>
        </div>
      </label></a></li>
      </ul>
    </div>

  </div>
</div>
       
    );
};

export default Header;