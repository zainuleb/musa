import React from "react";

const About = () => {
  return (
    <div className="about-area default-padding-top">
      <div className="container">
        <div className="row">
          <div className="about-items">
            <div className="col-md-6 left-info">
              <h2>
                <span>Welcome !</span>We're a Vibrant Community
              </h2>
              <blockquote>
                Join a vibrant community dedicated to fostering a supportive
                environment for Muslim students at Viadrina University. Engage
                in enriching activities, cultural events, and educational
                programs that celebrate our faith and heritage.
              </blockquote>
            </div>
            <div className="col-md-6 right-info">
              <p>
                Whether you seek spiritual growth, academic support, or a sense
                of belonging, the MuSA is here to help you thrive.
              </p>
              <a className="btn circle btn-theme effect btn-md" href="/#">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
