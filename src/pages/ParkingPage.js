import React from "react";

const ParkingPage = () => {
  return (
    <div className="marshall-container">
      <div className="marshall-col-5 marshall-col-screen marshall-screen-left">
        <div className="marshall-logo fadeIn fast">
          <img src="images/logo.svg" alt="Marshall Logo" />
        </div>
        <div
          id="marshall-animate-area"
          data-hide="mrs-scaleDown"
          className="marshall-single-fit-thumb marshall-animate-content marshall-animate-content mrs-active marshall-fit-column"
          style={{ backgroundImage: "url('images/v6/building.jpg')" }}
        ></div>
        <div className="marshall-social-column">
          <p className="fadeIn fast">Stay in touch :</p>
          <ul className="marshall-social-links">
            <li>
              <a className="fadeIn fast-child-1" href="/#" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="fadeIn fast-child-2" href="/#" title="Facebook">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="fadeIn fast-child-3" href="/#" title="Facebook">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="fadeIn fast-child-4" href="/#" title="Facebook">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="marshall-col-7 marshall-col-content">
        <div className="marshall-content css-center">
          <h2 className="single_large_title big_title fadeIn fast">
            Launch In
          </h2>
          <h2
            className="single_large_title fadeIn medium"
            id="countdown_text_layout"
          ></h2>
          <p className="short_description">
            Be first to know about the latest updates and get exclusive offer on
            our grand opening
          </p>

          <div className="default_mrs_newsletter marshall-inline-form">
            <form id="marshall-form" className="marshall-newsletter-content">
              <input
                id="marshall-email"
                type="email"
                placeholder="Your Email"
              />
              <button className="marshall_submit" type="submit">
                Subscribe
              </button>
              <label for="marshall-email"></label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
