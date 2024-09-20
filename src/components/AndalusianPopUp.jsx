import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/media/and1.png";
import PopUpImg2 from "../assets/media/and2.png";
import PopUpImg3 from "../assets/media/and3.png";
import PopUpImg4 from "../assets/media/and4.png";
import PopUpImg5 from "../assets/media/and5.png";
import PopUpImg6 from "../assets/media/and6.png";
import PopUpImg7 from "../assets/media/and7.png";
import PopUpImg8 from "../assets/media/and8.png";


const AndalusianPopup = ({ isVisible, onClose }) => {
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
        <p className="corpo">Andalusian Banquets</p>
        <div className="corporate_main">
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">02/05/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Website Management</p>
          </div>
        </div>
        <p className="Ornare">
        I managed Andalusian Banquets, a sophisticated banquet website built on core PHP that highlights a range of stunning banquet venues, including Cordoba, Granada, Seville, Alhambra, and more. The website showcases the unique ambiance and exceptional services offered by each banquet, tailored for weddings, celebrity events, and a wide variety of corporate functions. The platform offers potential clients an in-depth look at the luxurious settings available for their special occasions, providing an immersive experience through high-quality visuals and comprehensive details.
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
        Additionally, Andalusian Banquets features a dedicated blog page that chronicles the exclusive events we've hosted, from celebrity weddings to major corporate gatherings, offering insights and inspiration for future clients. Each blog post provides a detailed look at the events, including the ambiance, services, and the experiences we deliver.
By leveraging core PHP, I ensured that the website is both robust and flexible, allowing for smooth navigation, scalability, and user-friendly functionality. The design is optimized for performance and responsiveness, ensuring seamless browsing across all devices. Andalusian Banquets not only captures the essence of luxury and elegance but also serves as a versatile platform for showcasing our events, engaging potential clients, and building trust with high-profile clientele.

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
        <div className="pop-up-img-section2">
          <img src={PopUpImg8} alt="pop-up-img2" />
        </div>
      </div>
    </div>
  );
};

export default AndalusianPopup;
