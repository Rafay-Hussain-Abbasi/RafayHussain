import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, my name is <span>Rafay Hussain</span>, a dedicated Software Engineer with a passion for creating impactful web solutions. Specializing in front-end development, UI/UX design, and WordPress development, I thrive on delivering seamless, user-centric digital experiences. With a solid foundation in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD, I translate concepts into functional, visually engaging websites. I'm always eager to learn, grow, and contribute to meaningful projects that drive success for both users and businesses.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Rafay Hussain</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Pakistani</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <a
            className="about-detail-info email"
            href="tel:+923407838842"
          >
            (+92) 3407838842
          </a>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <a
            className="about-detail-info email"
            href="mailto:rafay10sep@gmail.com"
          >
            rafay10sep@gmail.com
          </a>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">2+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English, Urdu</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
