import React from "react";
import BasicPlanSvg from "../assets/images/svg/basic-plain.svg";
import StandardPlanSvg from "../assets/images/svg/strandard-plan.svg";
import GoldPlanSvg from "../assets/images/svg/gold-plan.svg";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- ====================================== Section Pricing ===================================== --> */}
      {/* <section className="Pricing-section" id="pricing">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Pricing.
          </h2>
          <div className="line"></div>
        </div>
        <div className="pricing-section-main zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box">
              <img src={BasicPlanSvg} alt="basic-plain" />
              <p className="basic-plain-text">Basic Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                25<sup>$</sup>
                <span>/mon</span>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Web Development</h3>
              <h3 className="pricing-plaines-name">Mobile Development</h3>
              <h3 className="pricing-plaines-name">Advertising</h3>
              <h3 className="pricing-plaines-name">Graphic Design</h3>
              <h3 className="pricing-plaines-name">Project Management</h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% taxes will include after make price</p>
            </div>
          </div>
        </div>
        <div className="pricing-section-main zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box basic-plain-box2">
              <img src={StandardPlanSvg} alt="strandard-plan" />
              <p className="basic-plain-text">Standard Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                75<sup>$</sup>
                <span>/mon</span>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Web Development</h3>
              <h3 className="pricing-plaines-name">Mobile Development</h3>
              <h3 className="pricing-plaines-name">Advertising</h3>
              <h3 className="pricing-plaines-name">Graphic Design</h3>
              <h3 className="pricing-plaines-name">Project Management</h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% taxes will include after make price</p>
            </div>
          </div>
        </div>
        <div className="pricing-section-main mb-0 zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box basic-plain-box3">
              <img src={GoldPlanSvg} alt="gold-plan" />
              <p className="basic-plain-text">Gold Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                125<sup>$</sup>
                <span>/mon</span>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Web Development</h3>
              <h3 className="pricing-plaines-name">Mobile Development</h3>
              <h3 className="pricing-plaines-name">Advertising</h3>
              <h3 className="pricing-plaines-name">Graphic Design</h3>
              <h3 className="pricing-plaines-name">Project Management</h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% taxes will include after make price</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- ====================================== Section Pricing End ===================================== --> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      <section className="testimonials-section" id="testimonials" style={{marginBottom: "100px" }}>
        <div className="heading-container" style={{marginTop: "100px"}}>
          <h2 className="section-heading-text coding-skill-text fade_up">
            Testimonials.
          </h2>
          <div className="line"></div>
        </div>
        <p className="testament fade_up">
          Their words are a testament to my commitment to excellence and our
          ability to bring their visions to life. Read on to see how I've made
          a lasting impact on their projects.
        </p>

        <Slider className="Testimonials" {...settings}>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
            If you need someone to handle website maintenance and optimization, look no further than Rafay. He has been managing our site with great efficiency, ensuring it runs smoothly and performs optimally. His expertise has been invaluable.
            </p>
            <p className="client-name">Hassan Khan</p>
            <p className="kello">Insight Solutions</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
            Rafay’s WordPress development skills are outstanding. He built a custom site that perfectly fits our needs and has been providing excellent support since launch. His professionalism and expertise are greatly appreciated.Highly recommened developer.
            </p>
            <p className="client-name">Arham Asher</p>
            <p className="kello">Freelance</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
            "Working with Rafay was a breeze! His skills in WordPress development were evident from the start. He crafted a beautiful, functional site for us and has been a great help with ongoing maintenance. Highly recommend his services!"
            </p>
            <p className="client-name">Bakhtawar Iqbal</p>
            <p className="kello">Insight Solutions</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
            "Rafay's UI/UX design work exceeded our expectations. He has a keen eye for design and a deep understanding of user experience. Our new website is not only visually appealing but also incredibly intuitive. Fantastic job Rafay! Keep it Up!
            </p>
            <p className="client-name">Arsalan Sheikh</p>
            <p className="kello">Freelance</p>
          </div>
        </Slider>
      </section>
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
    </>
  );
};
export default Pricing;
