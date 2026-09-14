import React, { useState, useEffect } from "react";
import ContentSvg4 from "../assets/images/reh-logo.png";
import ContentSvg2 from "../assets/images/imp-logo.png";
import ContentSvg from "../assets/images/InsightLogo.png";
import ContentImg from "../assets/images/content-img.png";
import YoutubeVideoImg from "../assets/images/youtube-video-img.png";
import YoutubeSvg from "../assets/images/pin-Logo.png";
import VimeoVideoImg from "../assets/images/vimeo-video-img.png";
import VimeoSvg from "../assets/images/KALAKR LOGO.png";
import SoundCloudImg from "../assets/images/sound-cloud-img.png";
import SoundCloudSvg from "../assets/images/InsightFilmsLogo.png";
import ContentImg2 from "../assets/images/content-img2.png";
import GalleryImg from "../assets/images/gallery-img.png";
import InsightFilmsPopup from "./InsightFilmsPopUp";
import InsightSolutionsPopup from "./InsightSolutionsPopUp";
import PinnaclePopup from "./PinnaclePopUp";
import KalakarPopup from "./KalakarPopUp";
import RehnumaPopup from "./RehnumaPopUp";
import ImperialPopup from "./ImperialPopUp";

const projectLinks = {
  InsightSolutions: "https://insightsolutions.vercel.app/",
  Kalakar: "https://kalakar-digital.vercel.app/",
  PinnacleEvents: "https://pinnacleevents.vercel.app/",
  InsightFilms: "https://insight-films.vercel.app/",
  ImperialMarquees: "https://imperial-eosin.vercel.app/",
  RehnumaNews: "https://rehnumanews.tv/",
};

const Portfolio = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupOpen = (popupName) => {
    setActivePopup(popupName);
  };

  const handlePopupClose = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    const handleImageClick = (event) => {
      event.target.classList.toggle("full");
    };

    const galleryLinks = document.querySelectorAll(".gallery-link img");
    galleryLinks.forEach((link) => {
      link.addEventListener("click", handleImageClick);
    });

    return () => {
      galleryLinks.forEach((link) => {
        link.removeEventListener("click", handleImageClick);
      });
    };
  }, []);

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main">
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={() => handlePopupOpen("InsightSolutions")}
            >
              <img className="main-portfolio-img" src={ContentImg} alt="content-img" />
              <div className="overlay">
                <img src={ContentSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">Insight Solutions</p>
              </div>
            </div>
            <a
              href={projectLinks.InsightSolutions}
              target="_blank"
              rel="noopener noreferrer"
              className="Corporate zoom_in"
              onClick={(e) => e.stopPropagation()}
            >
              Insight Solutions
            </a>

            <div
              className="second-row-portfolio popup-btn zoom_in"
              onClick={() => handlePopupOpen("PinnacleEvents")}
            >
              <div className="image-container">
                <img className="main-portfolio-img" src={YoutubeVideoImg} alt="youtube-video-img" />
                <div className="overlay">
                  <img src={YoutubeSvg} alt="youtube-svg" className="vimeo-icon" />
                  <p className="overlay-text">Pinnacle Events</p>
                </div>
              </div>
              <a
                href={projectLinks.PinnacleEvents}
                target="_blank"
                rel="noopener noreferrer"
                className="Corporate"
                onClick={(e) => e.stopPropagation()}
              >
                Pinnacle Events
              </a>
            </div>
          </div>
          <div>
            <div>
              <div
                className="image-container zoom_in"
                onClick={() => handlePopupOpen("Kalakar")}
              >
                <img className="main-portfolio-img" src={VimeoVideoImg} alt="vimeo-video-img" />
                <div className="overlay">
                  <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                  <p className="overlay-text">Kalakar</p>
                </div>
              </div>
              <a
                href={projectLinks.Kalakar}
                target="_blank"
                rel="noopener noreferrer"
                className="Corporate zoom_in"
                onClick={(e) => e.stopPropagation()}
              >
                Kalakar
              </a>
            </div>
            <div
              className="second-row-portfolio popup-btn zoom_in"
              onClick={() => handlePopupOpen("InsightFilms")}
            >
              <div className="image-container">
                <img className="main-portfolio-img" src={SoundCloudImg} alt="sound-cloud-img" />
                <div className="overlay">
                  <img src={SoundCloudSvg} alt="sound-cloud" className="vimeo-icon" />
                  <p className="overlay-text">Insight Films</p>
                </div>
              </div>
              <a
                href={projectLinks.InsightFilms}
                target="_blank"
                rel="noopener noreferrer"
                className="Corporate"
                onClick={(e) => e.stopPropagation()}
              >
                Insight Films
              </a>
            </div>
          </div>
          <div className="gallery-bank-section">
            <div className="zoom_in">
              <div className="image-container"  onClick={() => handlePopupOpen("ImperialMarquees")}>
                <img className="main-portfolio-img" src={GalleryImg} alt="content-img2" />
                <div className="overlay">
                  <img src={ContentSvg2} alt="content-svg" className="vimeo-icon" />
                  <p className="overlay-text">The Imperial Marquees</p>
                </div>
              </div>
              <a
                href={projectLinks.ImperialMarquees}
                target="_blank"
                rel="noopener noreferrer"
                className="Corporate"
                onClick={(e) => e.stopPropagation()}
              >
                The Imperial Marquees
              </a>
            </div>
            <div
              className="second-row-portfolio popup-btn zoom_in"
              onClick={() => handlePopupOpen("RehnumaNews")}
            >
              <div className="image-container">
                <img className="main-portfolio-img" src={ContentImg2} alt="content-img2" />
                <div className="overlay">
                  <img src={ContentSvg4} alt="content-svg" className="vimeo-icon" />
                  <p className="overlay-text">Rehnuma News</p>
                </div>
              </div>
              <a
                href={projectLinks.RehnumaNews}
                target="_blank"
                rel="noopener noreferrer"
                className="Corporate"
                onClick={(e) => e.stopPropagation()}
              >
                Rehnuma News
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popups */}
      {activePopup === "InsightSolutions" && (
        <InsightSolutionsPopup isVisible onClose={handlePopupClose} />
      )}
      {activePopup === "PinnacleEvents" && (
        <PinnaclePopup isVisible onClose={handlePopupClose} />
      )}
      {activePopup === "ImperialMarquees" && (
        <ImperialPopup isVisible onClose={handlePopupClose} />
      )}
      {activePopup === "Kalakar" && (
        <KalakarPopup isVisible onClose={handlePopupClose} />
      )}
      {activePopup === "InsightFilms" && (
        <InsightFilmsPopup isVisible onClose={handlePopupClose} />
      )}
      {activePopup === "RehnumaNews" && (
        <RehnumaPopup isVisible onClose={handlePopupClose} />
      )}
    </>
  );
};

export default Portfolio;
