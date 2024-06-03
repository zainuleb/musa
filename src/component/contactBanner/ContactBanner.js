import React from "react";
import { Link } from "react-router-dom";
const ContactBanner = () => {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center text-light"
      style={{ backgroundImage: "url(assets/img/contact-us-banner.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Contact Us</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/membership">
                  <i className="fas fa-clipboard-list"></i>
                  Membership
                </Link>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
