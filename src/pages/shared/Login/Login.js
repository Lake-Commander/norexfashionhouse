import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    googleLogin(navigate, location);
  };

  return (
    <section className="h-auto gradient-form bg-gray-200 md:h-auto">
      <div className="container mx-auto py-20 px-2 w-full md:w-[400px] lg:w-[400px]">
        <div className="flex justify-center items-center h-full g-6 text-gray-800">
          <div className="w-full">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="w-full px-4 md:px-0">
                  <div className="md:p-6 md:mx-2">
                    <div className="text-center">
                      <img className="mx-auto w-32" src="https://i.ibb.co/Pr5HW5P/download-removebg-preview.png" alt="logo" />
                    </div>
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck3"
                          />
                          <label className="form-check-label inline-block text-gray-800" htmlhtmlFor="exampleCheck2">
                            Remember me
                          </label>
                        </div>
                        <Link to="/register">
                          <button className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                            Forgot password?
                          </button>
                        </Link>
                      </div>
                      <p className="text-sm font-semibold mb-2 pb-1">
                        Don't have an account?
                        <Link to="/register" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                          Register
                        </Link>
                      </p>
                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:primary hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Sign in
                      </button>
                      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">
                          <p className="text-lg mb-0 mr-4">Sign in with</p>
                        </p>
                      </div>
                      <div className="flex flex-row items-center mt-5 justify-center">
                        <button
                          onClick={handleClick}
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="inline-block p-2 bg-blue-200 text-stone-300 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg  transition duration-150 ease-in-out mx-1"
                        >
                          <svg viewBox="0 0 48 48" className="w-6 h-6">
                            <title>Google Logo</title>
                            <clipPath id="g">
                              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                            </clipPath>
                            <g className="colors" clipPath="url(#g)">
                              <path fill="#FBBC05" d="M0 37V11l17 13z" />
                              <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                              <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                              <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                            </g>
                          </svg>
                        </button>
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
                            <path
                              fill="currentColor"
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="inline-block p-3 bg-[#1DA1F2] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#0364a1] hover:shadow-lg  transition duration-150 ease-in-out mx-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                            <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
