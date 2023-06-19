
import logo from '../../assets/images/brandLogo.jpg';
import LogoName from '../../assets/images/navbar/Logo (1).png'
import searchIcon from '../../assets/images/NavBar_Search_Icon 1.png'
const Header = () => {
    return (
      
        <div className="navbar bg-accent h-20">
  <div className="flex-1">
          <a className=" normal-case text-xl flex ">
            {/* <img src={logo} alt="" className='w-16 ' /> */}
            <img src={LogoName} alt="" className='ml-1 w-32' />
    </a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
     <div className="join ">
  <input className="input input-bordered join-item rounded-full " placeholder="Search SnipShop.com"/>
  <button className="btn join-item rounded-full rounded-r-full btn-neutral"><img src={searchIcon} alt="" /></button>
</div>
    </div>
    <div className="dropdown dropdown-end">
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
     
    </div>
  </div>
</div>
       
    );
};

export default Header;