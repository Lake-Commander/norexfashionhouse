import React from "react";
import ButtonRight from "./ButtonRight/ButtonRight";
import ComboOffer from "./ComboOffer/ComboOffer";
import Features from "./Features/Features";
import OurClients from "./OurClients/OurClients";
import BestSellers from "./BestSellers/BestSellers";

const Right = () => {
  return (
    <div>
        <Features/>
        <ComboOffer/>
        <BestSellers/>
        <OurClients/>
        <ButtonRight/>
    </div>
  );
};

export default Right;
