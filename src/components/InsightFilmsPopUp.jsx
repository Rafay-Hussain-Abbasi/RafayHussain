import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/insF1.png";
import PopUpImg2 from "../assets/media/insF2.png";
import PopUpImg3 from "../assets/media/insF3.png";
import PopUpImg4 from "../assets/media/insF4.png";
import PopUpImg5 from "../assets/media/insF5.png";

const InsightFilmsPopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">Insight Films</p>
        
        <div className="corporate_main">
          
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">12/06/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">WebDevelopment</p>
          </div>
        </div>
        <p className="Ornare">
        I designed and developed Insight Films, a dynamic movie website using HTML, CSS, and JavaScript. The site features a visually engaging hero section with a carousel showcasing the posters of three key films, using smooth fade transitions to create an immersive introduction. Following this is the About Us section, where I highlighted our recently released movie poster alongside a brief description, ensuring the content is informative and appealing. The website also includes an Upcoming Movies section, where users can easily stay updated on future releases, and a dedicated DVCs section to showcase our Digital Video Content, further enhancing the user experience by offering multimedia storytelling. 
        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
        Additionally, the Featured Movies section draws attention to our top content, presenting users with a curated list of must-watch films. Finally, the website concludes with a well-structured footer that includes essential links and contact information, enhancing navigation and accessibility. This project reflects my ability to create user-friendly, responsive, and optimized web designs, ensuring a seamless experience across all devices while reinforcing the brand presence of Insight Films.
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

export default InsightFilmsPopup;
