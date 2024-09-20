import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/pin1.png";
import PopUpImg2 from "../assets/media/pin2.png";
import PopUpImg3 from "../assets/media/pin3.png";
import PopUpImg4 from "../assets/media/pin4.png";
import PopUpImg5 from "../assets/media/pin5.png";
import PopUpImg6 from "../assets/media/pin6.png";
import PopUpImg7 from "../assets/media/pin7.png";

const PinnaclePopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">Pinnacle Events</p>
        
        <div className="corporate_main">
          
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">05/05/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Web Development</p>
          </div>
        </div>
        <p className="Ornare">
        I developed Pinnacle Events, a comprehensive website dedicated to showcasing premium food catering services. The site opens with an engaging hero section that immediately draws users in, highlighting the essence of our catering brand. Following this, the About Us section offers insight into the expertise and passion that drives Pinnacle Events, providing visitors with a clear understanding of our mission to deliver exceptional culinary experiences.
The Services section showcases our wide array of offerings, including full-service catering, decor, sound and music, fireworks, and more, allowing potential clients to easily explore the customized event solutions we provide. I also added a Video section, featuring dynamic footage from past events, giving users a glimpse into our work and the memorable experiences we create.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg3} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg4} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
        Next, the Packages section breaks down various food packages, catering to different client needs and budgets, while the Testimonials section highlights positive feedback from satisfied customers, reinforcing our reputation for excellence. To further build trust, the Client section proudly displays the logos of companies we've worked with, serving as a visual testament to our established industry relationships. The website is rounded out with a clean and functional footer for easy navigation.
This project reflects my ability to create a fully optimized, responsive, and visually appealing website, designed to provide an immersive user experience. Pinnacle Events effectively communicates our services and values, helping potential clients make informed decisions while showcasing the best of what we offer in the catering industry.

        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg5} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg6} alt="pop-up-img2" />
        </div>
        <div className="pop-up-img-section2">
          <img src={PopUpImg7} alt="pop-up-img2" />
        </div>
      </div>
    </div>
  );
};

export default PinnaclePopup;
