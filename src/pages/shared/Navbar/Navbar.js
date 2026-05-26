/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  faArrowRightToBracket,
  faArrowAltCircleLeft,
  faBagShopping,
  faEnvelope,
  faPhone,
  faUser,
  faSearch,
  faHeart,
  faClose,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/images/logo/logo.webp";
import img1 from "../../../assets/images/navImg/img1.webp";
import img2 from "../../../assets/images/navImg/img2.webp";
import img3 from "../../../assets/images/navImg/img3.jpeg";
import img4 from "../../../assets/images/navImg/img4.jpeg";
import img5 from "../../../assets/images/navImg/img5.jpeg";
import img6 from "../../../assets/images/navImg/img6.jpeg";
import img7 from "../../../assets/images/navImg/img7.jpeg";
import img8 from "../../../assets/images/navImg/img8.jpeg";
import iconHamburger from "../../../assets/images/icon/hamburger.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./nav.css";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { logOut, user } = useAuth();
  const [menuItem, setMenuItem] = useState([]);
  useEffect(() => {
    fetch("menuitem.json")
      .then((res) => res.json())
      .then((data) => setMenuItem(data));
  }, []);
  return (
    <React.Fragment>
      <section>
        {/*phone, email and My Account top navbar */}
        <div className="flex text-black text-[12px] justify-between py-[9px] container items-center">
          <div className="hidden lg:inline-flex gap-x-5">
            <div className="flex items-center gap-2 font-sans">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span className="">+8801998839126</span>
            </div>
            <div className="flex items-center gap-2 font-sans ">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="hover:cursor-pointer hover:text-rose-600 ">
                fasion.house.italy@gmail.com
              </span>
            </div>
          </div>
          <div>
            <div className="dropdown hover:cursor-pointer dropdown-hover">
              <h1 className="flex justify-between items-center text-[12px] hover:text-rose-600">
                My Account
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </h1>

              <ul
                tabIndex="0"
                className="dropdown-content menu py-2 shadow  bg-base-100  rounded w-36"
              >
                {user.displayName ? (
                  <div>
                    <li>
                      <button
                        className="flex text-[12px] gap-2 hover:text-rose-600"
                        onClick={logOut}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className=""
                          icon={faArrowAltCircleLeft}
                        />{" "}
                        Logout
                      </button>
                    </li>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <li className=" ">
                        <small className="flex text-[12px] gap-2 hover:text-rose-600">
                          {" "}
                          <FontAwesomeIcon
                            className=""
                            icon={faArrowRightToBracket}
                          />{" "}
                          Login
                        </small>{" "}
                      </li>
                    </Link>
                    <li>
                      <small className="flex text-[12px] hover:text-rose-600 gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="/register">Create Account</Link>
                      </small>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* logo, catagories, search and cart icon option second navbar  */}
        <div className="bg-black py-4">
          <div className="  container flex flex-col lg:flex-row items-center justify-between ">
            <div className="">
              <Link to="/home">
                <div className="">
                  {" "}
                  <img className="h-[45px]" src={logo} alt="" />{" "}
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-x-10 mt-2 lg:mt-0">
              <div className=" hidden  lg:flex text-white ">
                <ul className="menu menu-horizontal p-0 ">
                  <div>
                    <select
                      name="categories"
                      id="categories"
                      className=" bg-[#3A3A3A] xl:w-52 h-9 text-sm px-3 focus:outline-none"
                    >
                      <option value="All Categories" disabled selected>
                        All Categories
                      </option>
                      <option value="High Heels">High Heels</option>
                      <option value="Flat Slippers">Flat Slippers</option>
                      <option value="Hand Bags">Hand Bags</option>
                      <option value="Modern Tops">Modern Tops</option>
                      <option value="Fittops">Fittops</option>
                      <option value="T-shirt">T-shirt</option>
                      <option value="Jeans">Jeans</option>
                    </select>
                  </div>

                  <div className="bg-[#3A3A3A] xl:w-96 h-9 text-sm pl-2 2xl:mr-32 xl:mr-10 lg:mr-16 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Search.."
                      className="bg-[#3A3A3A] focus:outline-none border-l h-full pl-3 border-stone-500 placeholder:text-white w-full"
                    />
                    <span className=" text-white cursor-pointer  h-9 px-3 flex items-center hover:bg-white hover:text-black  ">
                      <FontAwesomeIcon icon={faSearch} className="text-lg " />
                    </span>
                  </div>
                </ul>
              </div>

              <div>
                <label htmlFor="my-drawer1">
                  <img
                    src={iconHamburger}
                    className={"h-7 lg:hidden"}
                    onClick={() => setOpen(true)}
                    alt="icon"
                  />
                </label>
              </div>
              <div className="text-3xl flex lg:hidden">
                <button className="btn text-white text-3xl  btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <span className="text-3xl">
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white hover:text-primary duration-150 cursor-pointer"
                  />
                </span>
              </div>
              <div className="relative">
                <span className="absolute top-[-10px]  rounded-full h-5 w-5 text-sm text-center bg-primary right-[-6px] text-white">
                  0
                </span>
                <div className="dropdown dropdown-hover  relative z-[401] dropdown-end">
                  <label tabIndex="0" className="">
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className="text-white p-1 text-3xl hover:text-primary duration-150 cursor-pointer"
                    />
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu dropdown-content p-1 shadow font-semibold text-sm bg-base-100 w-64 lg:w-80 "
                  >
                    <li className="">
                      <span className="flex items-center justify-center">
                        Your Cart is currently empty!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="dropdown2 bg-white lg:w-[1200px] lg:mx-auto">
          <ul
            className={`transition-all lg:transition-none duration-700 lg:duration-75  ease-in-out bg-white  px-8 lg:static fixed  top-0   lg:h-auto h-screen flex flex-col lg:items-center lg:flex-row justify-start lg:justify-center    z-10 w-3/6 md:w-2/6 lg:w-full ${
              !open ? "right-[-100%]" : "right-0"
            }`}
          >
            <li>
              <p
                className="lg:hidden  absolute right-2 cursor-pointer z-20 top-2"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon
                  className="text-white bg-black px-3 rounded-sm py-2 "
                  icon={faClose}
                />
              </p>
            </li>
            <Link to="/home">
              <li className=" ">
                <a className="pt-[35px]  dura lg:pt-[14px] pb-[14px]  lg:px-5 font-semibold md:border-none  cursor-pointer hover:text-primary transition-all duration-700   inline-block text-md  ">
                  Home
                </a>
              </li>
            </Link>
            <li className=" hidden lg:block ">
              <div class="dropdown1 ">
                <span className="flex cursor-pointer py-[14px] lg:px-5  hover:text-primary transition-all duration-700   font-semibold justify-between items-center gap-2">
                  Collection{" "}
                  <FontAwesomeIcon
                    className="text-sm font-bold"
                    icon={faAngleDown}
                  />{" "}
                </span>

                <div class="dropdown-content1 ">
                  <div className="flex ">
                    <div className="flex-1 flex items-start ">
                      <div className="w-2/6 bg-white h-full">
                        <h2 className=" font-bold uppercase mb-5 text-primary">
                          HAND BAGS{" "}
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[0]?.collection[0]?.bags?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 cursor-pointer text-[14px]"
                            >
                              {" "}
                              <span className="border-[1px]  border-primary rounded-full h-2 w-2"></span>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-2/6 bg-white h-full">
                        <h2 className="uppercase font-bold mb-5 text-primary">
                          short skirt
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[0]?.collection[1]?.skirt?.map(
                            (x, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 cursor-pointer  text-[14px]"
                              >
                                {" "}
                                <span className="border-[1px]  border-primary rounded-full h-2 w-2"></span>{" "}
                                <p className="hover:text-primary  hover:font-semibold">
                                  {x}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="w-2/6 bg-white">
                        <h2 className="uppercase font-bold mb-5 text-primary">
                          gown
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[0]?.collection[2]?.gown?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 cursor-pointer  text-[14px]"
                            >
                              {" "}
                              <span className="border-[1px]  border-primary rounded-full h-2 w-2"></span>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white animate-img">
                      <img className="block mx-auto" src={img1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=" hidden lg:block ">
              <div class="dropdown1 ">
                <span className="flex cursor-pointer  py-[14px] lg:px-5  hover:text-primary transition-all duration-700  font-semibold justify-between items-center gap-2">
                  Shop{" "}
                  <FontAwesomeIcon
                    className="text-sm font-bold"
                    icon={faAngleDown}
                  />{" "}
                </span>

                <div class="dropdown-content3 ">
                  <div className="">
                    <div className="grid grid-cols-4">
                      <div className="">
                        <h2 className=" font-bold uppercase mb-5 text-primary">
                          BAGS{" "}
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[1]?.shop[0]?.bags?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2  cursor-pointer text-[14px]"
                            >
                              {" "}
                              <p className="border-[1px]  border-primary rounded-full h-2 w-2"></p>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <h2 className="uppercase font-bold mb-5 text-primary">
                          sandals
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[1]?.shop[1].sandals?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2  cursor-pointer text-[14px]"
                            >
                              {" "}
                              <p className="border-[1px]  border-primary rounded-full h-2 w-2"></p>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <h2 className="uppercase font-bold mb-5 text-primary">
                          high heel
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[1]?.shop[2]?.heel?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 cursor-pointer  text-[14px]"
                            >
                              {" "}
                              <p className="border-[1px]  border-primary rounded-full h-2 w-2"></p>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <h2 className="uppercase font-bold mb-5 text-primary">
                          Shoes
                        </h2>

                        <div className="space-y-3 animate-div">
                          {menuItem[1]?.shop[3]?.shoes?.map((x, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 cursor-pointer  text-[14px]"
                            >
                              {" "}
                              <p className="border-[1px]  border-primary rounded-full h-2 w-2"></p>{" "}
                              <p className="hover:text-primary  hover:font-semibold">
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <Link to="/terms">
              <li className=" ">
                <a className="pt-[35px]  dura lg:pt-[14px] pb-[14px]  lg:px-5 font-semibold md:border-none  cursor-pointer hover:text-primary transition-all duration-700   inline-block text-md  ">
                  Terms
                </a>
              </li>
            </Link>

            <Link to="/blogs">
              <li className=" ">
                <a className="pt-[35px]  dura lg:pt-[14px] pb-[14px]  lg:px-5 font-semibold md:border-none  cursor-pointer hover:text-primary transition-all duration-700   inline-block text-md  ">
                  Blogs
                </a>
              </li>
            </Link>
            
            <Link to="/be-seller">
              <li className=" ">
                <a className="pt-[35px]  dura lg:pt-[14px] pb-[14px]  lg:px-5 font-semibold md:border-none  cursor-pointer hover:text-primary transition-all duration-700   inline-block text-md  ">
                  Be seller
                </a>
              </li>
            </Link>

            <Link to="/about">
              <li>
                <a className=" font-semibold   hover:text-primary transition-all duration-700 cursor-pointer text-md block py-[14px] lg:px-5 ">
                  About us
                </a>
              </li>
            </Link>

            <Link to="/contact">
              <li>
                <a className=" font-semibold   hover:text-primary transition-all duration-700 cursor-pointer text-md block py-[14px] lg:px-5">
                  Contact us
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
};

export default Navbar;