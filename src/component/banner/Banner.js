import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-area banner-box-layout text-dark top-mar-50">
      <div
        id="bootcarousel"
        className="carousel heading-uppercase slide animate_text"
        data-ride="carousel"
      >
        <div className="carousel-inner carousel-zoom">
          <div
            className="item active bg-cover"
            style={{ backgroundImage: "url(assets/img/banner-image.jpg)" }}
          >
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content">
                        <h4 data-animation="animated fadeInUp">
                          Muslim Student Association - Viadrina
                        </h4>
                        <h2 data-animation="animated fadeInLeft">MuSA</h2>
                        <Link
                          to="/membership"
                          className="btn btn-dark border btn-md"
                          data-animation="animated fadeInDown"
                        >
                          Become a Member
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item bg-cover"
            style={{ backgroundImage: "url(assets/img/banner-image-2.jpg)" }}
          >
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content">
                        <h4 data-animation="animated fadeInUp">
                          Contribute your skills to Projects and initiatives.
                        </h4>
                        <h2 data-animation="animated fadeInLeft">
                          Volunteer Opportunities
                        </h2>
                        <Link
                          to="/membership"
                          className="btn btn-dark border btn-md"
                          data-animation="animated fadeInDown"
                        >
                          Become a Member
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#bootcarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#bootcarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
