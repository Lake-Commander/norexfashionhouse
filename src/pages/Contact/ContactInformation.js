/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const ContactInformation = () => {
  return (
    <div className="container mt-20 bg-base-200 p-10">
      <div className="flex">
        <div>
          <div className="flex ">
            <h1 className="font-sans">Contact information</h1>
            <div className="ml-32">
              <h1>
                Already have an account?{" "}
                <span className="cursor-pointer hover:text-primary">
                  <Link to="/login">Log in</Link>
                </span>
              </h1>
            </div>
          </div>
          <div className="mt-5">
            <form action="">
              <input type="email" placeholder="Email ot phone number" class="input input-bordered w-full max-w-md" />
            </form>
          </div>
          <div>
            <h1 className="font-sans mt-10 text-2xl">Shipping address</h1>
          </div>
          <div>
            <select class="select w-full max-w-md">
              <option disabled selected>
                City option
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Thailand</option>
              <option>Usa</option>
              <option>Dhaka</option>
            </select>
          </div>
          <div className="mt-5">
            <form action="">
              <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-md" /> <br />
              <input type="text" placeholder="Your Address" class="input input-bordered w-full max-w-md my-2" />
              <br />
              <input type="text" placeholder="Your City" class="input input-bordered w-full max-w-md my-2" />
              <br />
              <input type="number" placeholder="Postal code" class="input input-bordered w-full max-w-md my-2" />
              <div class="form-control max-w-md">
                <label class="label cursor-pointer">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text mr-48">Save this information for next time</span>
                </label>
              </div>
            </form>
          </div>
          <div className="flex mt-5">
            <div className="cursor-pointer hover:text-primary">
              <h1>Return to cart</h1>
            </div>
            <div>
              <button class="btn btn-outline btn-success ml-40 btn-sm">Continue to shipping</button>
            </div>
          </div>
        </div>

        <div className="ml-20">
          <div className="flex">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
            <div className="ml-10 mt-5">
              <p>Jeans & Tee full sleeves</p>
              <p>XXL / Brown</p>
            </div>
            <p className="ml-40 mt-5">$770.00</p>
          </div>
          <div className="mt-10 font-sans">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>$789.00</td>
                  </tr>

                  <tr class="active">
                    <td>Shipping</td>

                    <td>
                      <span className="text-sm">Calculated at next step</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Taxes (estimated) </td>

                    <td>$118.35</td>
                  </tr>
                  <tr>
                    <td>Total</td>

                    <td>
                      <span className="text-sm mr-3">USD</span>$907.35
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm">All rights reserved Shoping Mall In USA</p>
    </div>
  );
};

export default ContactInformation;
