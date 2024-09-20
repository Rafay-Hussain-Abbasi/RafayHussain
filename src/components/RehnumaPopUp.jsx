import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/reh1.png";
import PopUpImg2 from "../assets/media/reh2.png";
import PopUpImg3 from "../assets/media/reh3.png";
import PopUpImg4 from "../assets/media/reh4.png";
import PopUpImg5 from "../assets/media/reh5.png";
import PopUpImg6 from "../assets/media/reh6.png";

const RehnumaPopup = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={PopUpImg} alt="pop-up-img1" />
        <a className="close-btn popup-close" href="#" onClick={onClose}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>{" "}
        </a>
        <p className="corpo">Rehnuma News</p>
        <div className="corporate_main">
          
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">20/07/2024</p>
          </div>
         
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">WordPress Development</p>
          </div>
        </div>
        <p className="Ornare">
        I developed Rehnuma News, a dynamic Urdu-language news website built on WordPress, designed to provide readers with the latest updates and headlines across a wide range of topics. The website covers various news categories such as education, politics, weather, and more, ensuring comprehensive coverage of daily and recent events.
With a clean and user-friendly interface, Rehnuma News allows users to easily navigate through different categories, providing an immersive experience for Urdu-speaking readers. The responsive design ensures the website performs seamlessly across all devices, offering users the ability to stay informed on the go.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
        This project demonstrates my ability to create a fully functional and optimized news platform, specifically tailored for an Urdu-speaking audience. By leveraging WordPress, I ensured ease of content management and scalability, while focusing on the user experience to make the website an essential source of news for its audience.
        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg4} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg5} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg6} alt="pop-up-img2" />
        </div>
      </div>
    </div>
  );
};

export default RehnumaPopup;
