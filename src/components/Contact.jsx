import React, { useEffect, useState } from "react";

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <>
      {/* <!-- ====================================== Section Contact ===================================== --> */}
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Get In Touch.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text fade_up">
          TAKE A COFFEE & CHAT WITH ME
        </p>
        <div className="main-box-contact">
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89544 42 4 41.1046 4 40V8C4 6.89544 4.89544 6 6 6ZM24.1212 23.3658L11.2944 12.4754L8.70556 15.5246L24.1462 28.6342L39.3088 15.5123L36.6912 12.4877L24.1212 23.3658Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">EMAIL</p>
              <p className="contact-email">
                <a href="mailto:rafay10sep@gmail.com">rafay10sep@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14 4H36C37.1046 4 38 4.89544 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V0H14V4ZM14 8V18H34V8H14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">PHONE</p>
              <p className="contact-email">
                <a href="tel:+923407838842">+92 3407838842</a>
              </p>
            </div>
          </div>
        </div>
        <form className="form-container" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="49c7c8a0-f52d-4031-9f0c-1add793162a9"/>
          <div className="form">
            <label htmlFor="name" className="form__label">
              NAME
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Your name"
              id="name"
              name="name"
              required
              autoComplete="off"            
             
            />
          </div>
          <div className="form">
            <label htmlFor="email" className="form__label">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Your email"
              id="email"
              required
              autoComplete="off"
          
            />
          </div>
          <div className="form subject-input-main">
            <label htmlFor="subject" className="form__label">
              SUBJECT
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Your subject"
              id="subject"
              required
              name="subject"
              autoComplete="off"
              
            />
          </div>
          <div className="form">
            <label htmlFor="message" className="form__label">
              MESSAGE
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Write your text..."
              id="message"
              name="message"
              required
              autoComplete="off"
              
            />
          </div>    
        <div className="wrapper blog-btn">
          <button className="btn-hover" type="submit">
            Submit Now
          </button>
        </div>
        </form>
        <div className="footer">
      Designed and Developed with❤️by
          <span>
            <a href="/">Rafay Hussain</a>
          </span>
        </div>
      </section>
      {/* <!-- ====================================== Section Contact End ===================================== --> */}
    </>
  );
};
export default Contact;
