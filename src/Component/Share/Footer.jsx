import logo from "../../assets/images/footer/logo.png";
import instra from "../../assets/images/footer/instra.png";
import facebook from "../../assets/images/footer/facebook.png";
import twetter from "../../assets/images/footer/twetter.png";
import web from "../../assets/images/footer/web.png";
import path from "../../assets/images/footer/p.png";
import "./Footer.css";
const Footer = () => {
  return (
    <section>
      <footer className="footer lg:grid-rows-1 grid-rows-2 p-10 text-base-100 bg-info lg:h-96">
        <div>
          <span className=" footer-header">Shop</span>
          <a className="link link-hover">Gift cards</a>
          <a className="link link-hover">SnipShop blog</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className=" footer-header">Sell</span>
          <a className="link link-hover">Sell on SnipShop</a>
          <a className="link link-hover">Tearms</a>
          <a className="link link-hover">Forums</a>
          <a className="link link-hover">Affiliates</a>
        </div>
        <div>
          <span className=" footer-header">About</span>
          <a className="link link-hover">SnipShop, Inc.</a>
          <a className="link link-hover">Policies</a>
          <a className="link link-hover">Investors</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Impact</a>
        </div>
        <div>
          <span className=" footer-header">Help</span>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Trust and safety</a>
          <a className="link link-hover ">Privacy settings</a>

          <div className="flex cursor-pointer justify-around items-center border p-1 rounded-full text-sm mt-8">
            <img src={logo} alt="brand-logo" />
            <p className=" pl-2 "> Download the SnipShop App </p>{" "}
          </div>
          <div className="flex cursor-pointer justify-around items-center  gap-x-5 mt-7">
            <img src={instra} alt="instra-logo" />
            <img src={facebook} alt="facebook-logo" />
            <img src={twetter} alt="twetter-logo" />
            <img src={web} alt="web-logo" />
            <img src={path} alt="p-logo" />
          </div>
        </div>
      </footer>
      {/* copyright section */}
      <div className="bg-success footer-base">
        <p>&copy; 2021-2023 SnipShop.com</p>
        <div className="flex justify-center items-center gap-x-5">
          <p>Terms of use</p>
          <p>Privacy</p>
          <p>Interest-based ads</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
