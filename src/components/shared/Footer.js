import React from "react";
import { faEnvelope, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/icon/footerImg/img1 Small.png";
import img2 from "../../assets/images/icon/footerImg/img2 Small.png";
import img3 from "../../assets/images/icon/footerImg/img3 Small.png";
import img4 from "../../assets/images/icon/footerImg/img4 Small.png";
import fb from "../../assets/images/icon/footerImg/social-icon/fb.png";
import insta from "../../assets/images/icon/footerImg/social-icon/insta.png";
import linkedin from "../../assets/images/icon/footerImg/social-icon/linkedin.png";
import twitter from "../../assets/images/icon/footerImg/social-icon/twitter.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className=" grid  gap-5 lg:gap-0 text-center md:text-left  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 container  py-16  ">
        <div className="font-sans ">
          <h2 className=" text-xl font-bold">Contact us</h2>
          <div className="text-[#848484] space-y-2 mt-4 text-[15px]">
            <p>Dhendabor, Senanibas Savar,</p>
            <p> Dhaka, BD 1344</p>

            <div className="">
              <FontAwesomeIcon icon={faPhone} /> <span>+8801998839126</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> <span className="hover:cursor-pointer hover:primary-300"> fasion.house.italy@gmail.com </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <img className="opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out" src={img1} alt="" />
            <img className="opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out" src={img2} alt="" />
            <img className="opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out" src={img3} alt="" />
            <img className="opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out" src={img4} alt="" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Help</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#848484] font-sans text-[15px]">
            <Link to="/contact" className="hover:text-red-500">
              Contact us
            </Link>
            <Link to="/refund" className="hover:text-red-500">
              Refund Policy
            </Link>
            <Link to="./privacy" className="hover:text-red-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-red-500">
              Terms of service
            </Link>
            <a href="facebook.com" className="hover:text-red-500">
              Information
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#848484] font-sans text-[15px]">
            <Link to="*" className="hover:text-red-500">
              Fashion House
            </Link>
            <Link to="/about" className="hover:text-red-500">
              About us
            </Link>
            <Link to="*" className="hover:text-red-500">
              Carriers
            </Link>
            <Link to="/refund" className="hover:text-red-500">
              Refund & Returns
            </Link>

            <Link to="*" className="hover:text-red-500">
              Deliveries
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Information</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#848484] font-sans text-[15px]">
            <a href="facebook.com" className="hover:text-red-500">
              Search Terms
            </a>
            <a href="facebook.com" className="hover:text-red-500">
              Advance Search
            </a>
            <a href="facebook.com" className="hover:text-red-500">
              Help & Faq's
            </a>
            <a href="facebook.com" className="hover:text-red-500">
              Store Location
            </a>
            <a href="facebook.com" className="hover:text-red-500">
              Orders & Returns
            </a>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold">Subscribe our newsletter</span>
          <div className="form-control  mt-4 flex flex-col gap-3 text-[#848484] font-sans text-[15px]">
            <label className="label p-0">
              <span className="label-text text-[#848484] text-[15px] leading-6">
                A short sentence describing what someone will receive by subscribing
              </span>
            </label>
            <div className="flex my-3 items-center justify-start">
              <input type="text" placeholder="Email address" className="h-[45px] pl-3 w-full placeholder:text-[13px] focus:outline-none" />
              <button className=" text-white cursor-pointer  h-[45px]  px-4 flex items-center bg-black  ">
                <FontAwesomeIcon icon={faPaperPlane} className=" " />
              </button>
            </div>
            <div>
              <h1 className=" text-xl text-black font-bold">Contact With us</h1>
              <div className="flex justify-center md:justify-start items-center gap-5 mt-3">
                <img className=" opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out h-5" src={fb} alt="" />
                <img className=" opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out h-7" src={linkedin} alt="" />
                <img className=" opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out h-6" src={twitter} alt="" />
                <img className=" opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out h-6" src={insta} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <h1 className="bg-black text-white text-center py-3 text-[15px] font-sans">
          Copyright © 2022, Mabel-Fashion Powered by Developer Build
        </h1>
      </div>
    </div>
  );
};

export default Footer;
