import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/adobe-xd-img.png";
import ElementoImg from "../assets/images/elementor-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/googlelogo.png";
import WinnerAward2 from "../assets/images/mehranUni.png";
import WinnerAward3 from "../assets/images/police.png";

import UiCertificate from "../assets/images/UI-Certificate.png";
import policeCertificate from "../assets/images/7th-Hour.jpg";
import ACWCertificate from "../assets/images/acw-Participant.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };
  
    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.querySelector(".percentage").innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }
  
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);
  
    return () => observer.disconnect();
  }, [colors]);
  
  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor in Software Engineering</p>
                <p className="cursus university">
                  Mehran University / 2019 - 2023
                </p>
                <p className="cursus">
                During my time at Mehran University, I immersed myself in the world of software development, mastering the art of coding and web technologies. This experience equipped me with the skills to create innovative, scalable solutions that drive efficiency and performance.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Intermediate in Pre-Engineering</p>
                <p className="cursus university">
                  AdamJee Govt. Science College / 2017 - 2019
                </p>
                <p className="cursus">
                Studied core engineering concepts, including mathematics and physics, laying the groundwork for advanced studies in software engineering.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Matriculation in Computer Science</p>
                <p className="cursus university">
                  Federal Secondary School / 2015 - 2017
                </p>
                <p className="cursus">
                Developed a strong interest in programming and computer science fundamentals. My studies in computer science allowed me to dive deep into the world of programming and problem-solving, sparking a lifelong journey into the tech world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">WEB DEVELOPER</p>
                <p className="cursus university">Insight Solutions / March2023 - Current</p>
                <p className="cursus">
                  As a skilled web developer at Insight Solutions Pvt Ltd, I'm entrusted with creating dynamic and user-centric websolutions that drive our clients' success. Leveraging my expertise, I contribute to the development and maintenance of innovative websites.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">WORDPRESS Developer</p>
                <p className="cursus university">CodeBucketz / May 2023 - July 2023</p>
                <p className="cursus">
                As a WordPress Developer, I specialized in creating dynamic, visually engaging websites with WordPress, delivering customized, user-friendly solutions optimized for performance.
                </p>
              </div>
              
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">FRONT-END DEVELOPER</p>
                <p className="cursus university">Interns.pk / November 2022 - December 2022</p>
                <p className="cursus">
                As a Front-End Developer, I played a key role in designing and developing responsive websites using HTML, CSS, and JavaScript. I translated design mockups into functional sites that enhanced the user experience across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section" id="skills">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
  <div data-num="93" className="progress-item fade_up">
    <p className="skill-name">HTML</p>
    <p className="percentage">0%</p>
  </div>
  <div data-num="90" className="progress-item fade_up">
    <p className="skill-name">CSS</p>
    <p className="percentage">0%</p>
  </div>
  <div data-num="80" className="progress-item fade_up">
    <p className="skill-name">JavaScript</p>
    <p className="percentage">0%</p>
  </div>
  <div data-num="72" className="progress-item fade_up">
    <p className="skill-name">PHP</p>
    <p className="percentage">0%</p>
  </div>
  <div data-num="70" className="progress-item fade_up">
    <p className="skill-name">React</p>
    <p className="percentage">0%</p>
  </div>
  {/* <div data-num="83" className="progress-item fade_up">
    <p className="skill-name">UI/UX Design</p>
    <p className="percentage">0%</p>
  </div> */}
</div>

      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section" >
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Design Skills.
          </h2>
          <div className="line"></div>
        </div>
        
        <div className="design-skill-sub-section">
        <div className="design-skills-img-main photoshop flip_up">
            <img src={ElementoImg} alt="elementor-img" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>Elementor</p>
            </div>
          </div>
          <div className="design-skills-img-main flip_up">
            <img src={FigmaImg} alt="figma-img" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>FIGMA</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>ADOBE XD</p>
            </div>
          </div>

          {/* <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>SKETCH</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>INVISION</p>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Certifications.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div style={{ display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                      <div className="years-award-img" style={{ display: 'flex' , flexDirection: 'column'}}>
                        <img
                        width="40px"
                          className="winner-award"
                          src={WinnerAward}
                          alt="winner-award4"
                        />
                         <p className="award-interior">Google</p>
                      </div>
                      <div style={{ display: 'flex' , flexDirection: 'column', justifyContent:"space-around" }}> 
                      <p className="award-yer">2025</p>
                        <img
                          width="100px"
                          className="winner-award-img"
                          src={UiCertificate}
                          alt="winner-award4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                     Foundations of User Experience (UX)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
              <div className="flip-box-front">
                  <div className="inner">
                    <div style={{ display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                      <div className="years-award-img" style={{ display: 'flex' , flexDirection: 'column'}}>
                        <img
                        width="50px"
                          className="winner-award"
                          src={WinnerAward3}
                          alt="winner-award4"
                        />
                         <p className="award-interior">Sindh Police</p>
                      </div>
                      <div style={{ display: 'flex' , flexDirection: 'column', justifyContent:"space-around" }}> 
                      <p className="award-yer">2025</p>
                        <img
                          width="100px"
                          className="winner-award-img"
                          src={policeCertificate}
                          alt="winner-award4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                     Certificate of Appreciation For Contribution In Promoting Their Film
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
              <div className="flip-box-front">
                  <div className="inner">
                    <div style={{ display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                      <div className="years-award-img" style={{ display: 'flex' , flexDirection: 'column'}}>
                        <img
                        width="40px"
                          className="winner-award"
                          src={WinnerAward2}
                          alt="winner-award4"
                        />
                         <p className="award-interior">Mehran University of Engineering & Technology</p>
                      </div>
                      <div style={{ display: 'flex' , flexDirection: 'column', justifyContent:"space-around" }}> 
                      <p className="award-yer">2025</p>
                        <img
                          width="100px"
                          className="winner-award-img"
                          src={ACWCertificate}
                          alt="winner-award4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    Certificate of Appreciation For Three Day WorkShop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
              <div className="flip-box-front">
                  <div className="inner">
                    <div style={{ display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                      <div className="years-award-img" style={{ display: 'flex' , flexDirection: 'column'}}>
                        <img
                        width="40px"
                          className="winner-award"
                          src={WinnerAward}
                          alt="winner-award4"
                        />
                         <p className="award-interior">Awwwards Interior</p>
                      </div>
                      <div style={{ display: 'flex' , flexDirection: 'column', justifyContent:"space-around" }}> 
                      <p className="award-yer">2025</p>
                        <img
                          width="100px"
                          className="winner-award-img"
                          src={UiCertificate}
                          alt="winner-award4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
