import React from "react";
import { Link } from "react-router-dom";
const ContactBanner = () => {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center text-light"
      style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Contact Us</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  <a href="#">
                    <i className="fas fa-home"></i>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a href="#">Page</a>
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
