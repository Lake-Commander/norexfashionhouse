import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/components/popup.css";
import popUpImg from '../../assets/images/popupImg/mega-sale.jpg';
const PopUp = ({ setShowPopUp, showPopUp }) => {
  return showPopUp ? (
    <div>
      <div className="popup fixed w-full h-full top-0 left-0 right-0 bottom-0 mx-auto">
        <div className="popup_inner absolute top-[40%] md:top-[35%] left-[10%] lg:left-[25%] right-[10%]  lg:right-[25%] mx-auto md:h-[600px] md:w-[600px]">
          <img src={popUpImg} className="" alt="" />
          <button
            className="absolute top-3 right-3"
            onClick={() => setShowPopUp(false)}
          >
            <span className="hover:bg-white bg-[#E51531] text-white hover:text-black transition-all duration-500 ease-in-out  py-2 px-[13px]  rounded-full font-bold text-lg">
              <FontAwesomeIcon icon={faClose} />
            </span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
