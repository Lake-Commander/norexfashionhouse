/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClothingData, HandbagsData, SandalsData } from "../../../StaticData/CardData";
const Cart = () => {
  const [increment, setIncrement] = useState(1);
  const { productId } = useParams();
  const clothCart = ClothingData.find((product) => product.id == productId);
  const handbagCart = HandbagsData.find((product) => product.id == productId);
  const sandalsCart = SandalsData.find((product) => product.id == productId);
  const [total, setTotal] = useState(clothCart.price || handbagCart.price || sandalsCart.price);
  const [subTotal, setSubTotal] = useState(parseInt(total) + 50);

  const handleIncrement = () => {
    let incrementCount = increment + 1;
    setIncrement(incrementCount);
    if (increment) {
      let increaseTotal = clothCart.price * increment || handbagCart.price * increment || sandalsCart.price * increment;
      setTotal(increaseTotal);
      setSubTotal(increaseTotal + 50);
    }
  };
  const handleDecrement = () => {
    if (increment > 1) {
      let decrementCount = increment - 1;
      let decreaseTotal = parseInt(total - clothCart.price) || parseInt(total - handbagCart.price) || parseInt(total - sandalsCart.price);
      setTotal(decreaseTotal);
      setIncrement(decrementCount);
      setSubTotal(decreaseTotal + 50);
    }
  };

  return (
    <div>
      <div className="bg-base-300 p-10">
        <h1 className="text-3xl text-center font-sans"> Your Shopping Cart</h1>
        <p className="text-center mt-5 font-sans ">
          <span className="hover:text-primary cursor-pointer">Home</span>/Your Shopping Cart
        </p>
      </div>
      <div className="container mt-10 font-sans">
        <div class="overflow-x-auto ">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={clothCart.img1} className="w-16" alt="" />
                </td>
                <td>{clothCart.name || handbagCart.name || sandalsCart.name}</td>
                <td>${clothCart.price || handbagCart.price || sandalsCart.price}</td>
                <td>
                  <button onClick={handleDecrement} className="mx-8 px-4 py-2 bg-[lightgrey] font-sans font-md">
                    -
                  </button>
                  {increment}
                  <button onClick={handleIncrement} className="mx-8 px-4 py-2 bg-[lightgrey] font-sans font-md">
                    +
                  </button>
                </td>
                <td>${total}</td>
                <td>
                  <button class="btn btn-xs">Remove</button>
                </td>
              </tr>
              <hr />
            </tbody>
          </table>
        </div>
        <div className="flex mt-10">
          <div>
            <p className="hover:text-primary cursor-pointer">Add a note to your order</p>
          </div>
          <div className="ml-auto font-sans ">
            <p className="text-sm text-center ">
              Shipping, taxes <b>$50</b> will be calculated at checkout. <br />
              <span className="text-2xl">Subtotal: ${subTotal}</span>
            </p>
            <div className="p-2 bg-white">
              <Link to="/">
                <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Continue Shopping</button>
              </Link>
              <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Update Cart</button>
              <Link to="/checkout">
                <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Cheek Out</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-96"></div>
      </div>
    </div>
  );
};

export default Cart;
