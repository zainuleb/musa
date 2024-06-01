import React from "react";

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
            style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
          >
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content">
                        <h4 data-animation="animated fadeInUp">
                          Welcome to Educom
                        </h4>
                        <h2 data-animation="animated fadeInLeft">
                          The best way to learn
                        </h2>
                        <a
                          data-animation="animated fadeInDown"
                          className="btn btn-dark border btn-md"
                          href="/#"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item bg-cover"
            style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
          >
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content">
                        <h4 data-animation="animated fadeInUp">
                          Upgrade your knowledge
                        </h4>
                        <h2 data-animation="animated fadeInLeft">
                          The new way of learning
                        </h2>
                        <a
                          data-animation="animated fadeInUp"
                          className="btn btn-dark border btn-md"
                          href="/#"
                        >
                          View Courses
                        </a>
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
