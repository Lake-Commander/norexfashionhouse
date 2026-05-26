import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
                      <img
                        className="mx-auto w-36"
                        src="https://i.ibb.co/Pr5HW5P/download-removebg-preview.png"
                        alt="logo"
                      />
                    </div>
                    <form>
                      <p className="mb-4">Create your account</p>
                      <div className="mb-4">
                        <input
                          name="name"
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="email"
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="password1"
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="password2"
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <p className="text-sm font-semibold mb-2 pb-1">
                        Already have an account?
                        <Link
                          to="/login"
                          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          Sign in
                        </Link>
                      </p>
                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:primary hover:shadow-lg mb-8 lg:mb-0  active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Create Account
                      </button>
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

export default Register;
