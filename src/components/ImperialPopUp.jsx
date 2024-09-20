import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/Imp1.png";
import PopUpImg2 from "../assets/media/Imp2.png";
import PopUpImg3 from "../assets/media/Imp3.png";
import PopUpImg4 from "../assets/media/Imp4.png";
import PopUpImg5 from "../assets/media/Imp5.png";
import PopUpImg6 from "../assets/media/Imp6.png";


const ImperialPopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">The Imperial Marquee</p>
        <div className="corporate_main">
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">20/05/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Web Development</p>
          </div>
        </div>
        <p className="Ornare">
        I developed a visually engaging website for a banquet venue, designed to showcase its unique offerings and enhance user experience. The site features a captivating hero section with an immersive video tour of the banquet hall, immediately drawing visitors in. 
The **About Us** section highlights the venue’s story and ambiance, complemented by three beautifully selected background images that reflect its elegance. A dedicated **Gallery** section showcases stunning visuals of past events, allowing potential clients to envision their own celebrations in the space.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>

        <p className="Ornare p-0">
        Additionally, a fixed sticky section prominently displays a corporate event video, ensuring that visitors have quick access to important content without disrupting their browsing experience. This website effectively combines aesthetics with functionality, making it an ideal digital representation of the banquet venue. 
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

export default ImperialPopup;
