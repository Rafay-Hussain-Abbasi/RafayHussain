import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/kal1.png";
import PopUpImg2 from "../assets/media/kal2.png";
import PopUpImg3 from "../assets/media/kal3.png";
import PopUpImg4 from "../assets/media/kal4.png";
import PopUpImg5 from "../assets/media/kal5.png";


const KalakarPopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">Kalakar</p>
       
        <div className="corporate_main">
          
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">14/05/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Web Development</p>
          </div>
        </div>
        <p className="Ornare">
        I designed and developed **Kalakar**, a website that offers a wide range of digital services, including social media management, graphic design, content writing, web development, and video editing. The website showcases our team members, providing visitors with an insight into the talent and expertise behind our services. Each member's profile is displayed to build credibility and trust with potential clients.
To enhance transparency and highlight our proven track record, I included a section featuring some of our key clients. This section serves as a testament to the quality of our work and the successful partnerships we've established. Additionally, the **Services** section is structured to offer a comprehensive overview of our offerings, ensuring that visitors can easily find the services they are interested in, whether it's crafting engaging content, designing visuals, managing social media, or building dynamic websites.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
        This project exemplifies my skills in web development, user experience design, and SEO optimization, creating a website that not only looks professional but is also user-friendly, responsive, and optimized for all devices. **Kalakar** is a digital services hub designed to drive engagement and provide businesses with top-tier digital solutions.
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

export default KalakarPopup;
