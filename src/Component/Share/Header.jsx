
import logo from '../../assets/images/brandLogo.jpg';
import LogoName from '../../assets/images/brandName5.png'
const Header = () => {
    return (
      
        <div className="navbar bg-accent h-20">
  <div className="flex-1">
          <a className=" normal-case text-xl flex ">
            <img src={logo} alt="" className='w-16 ' />
            <img src={LogoName} alt="" className='ml-1 ' />
    </a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
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