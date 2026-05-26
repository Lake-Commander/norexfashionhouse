import React, { useState } from "react";
import { CardData2 } from "../../../StaticData/CardData";

const SingleLIneProducts = () => {

  return (
    <section id="products2">
      <div className="button">
        <h2 className="text-2xl py-8 font-semibold">Featured Collection</h2>
      </div>

      <div className="main_product_card">
        {CardData2.map((product, i) => (
          <div key={product.id} className="card" style={{ transition: '0.5s' }}>
            <div className="imgBx">
              <img src={product.img} alt="" />
              <div className="action">
                <ul>
                  <li>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Add to Wishlist</span>
                  </li>
                  <li>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Add to Cart</span>
                  </li>
                  <li>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span>View Details</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="productName">
                <h3 className="text-2xl">{product.name.slice(0, 20)} {product.name.length > 20 ? '...' : " "}</h3>
              </div>
              <div className="price_rating">
                <h2 className="text-xl font-sans">€{product.price}</h2>
                {/*  <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleLIneProducts;
