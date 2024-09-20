import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/insS1.png";
import PopUpImg2 from "../assets/media/insS2.png";
import PopUpImg3 from "../assets/media/insS3.png";
import PopUpImg4 from "../assets/media/insS4.png";
import PopUpImg5 from "../assets/media/insS5.png";


const InsightSolutionsPopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">Insight Solutions</p>
        <div className="corporate_main">
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">22/08/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">WordPress Development</p>
          </div>
        </div>
        <p className="Ornare">
        I developed Insight Solutions, a WordPress-powered website for a digital marketing agency that provides a diverse range of services such as Out of Home (OOH) advertising, fabrication, brand activation, event management, and vehicle branding. The website has been designed with a modern and attractive aesthetic, aiming to capture the attention of potential clients while clearly showcasing the agency's offerings.
The Services section provides a comprehensive overview of the agency’s expertise in various marketing fields, allowing clients to explore how Insight Solutions can enhance their brand presence. The website also features an expansive Portfolio, showcasing successful collaborations with well-known clients such as Daraz, Alkaram, Krave Mart, and many more. This section effectively highlights the agency’s previous work, serving as proof of its industry capabilities and credibility.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
        Additionally, the website includes an in-depth Case Study section, providing a closer look at specific projects, strategies, and outcomes, further reinforcing the agency's expertise and problem-solving approach. The Blog section adds another dimension, offering valuable insights and industry trends to engage and educate visitors.
This project demonstrates my proficiency in building user-friendly, responsive websites using WordPress, with a focus on functionality and visual appeal. Insight Solutions serves as a complete digital hub, enhancing brand awareness and driving engagement for potential clients.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg4} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg5} alt="pop-up-img2" />
        </div>
      </div>
    </div>
  );
};

export default InsightSolutionsPopup;
