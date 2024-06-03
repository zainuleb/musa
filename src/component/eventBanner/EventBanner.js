import React from "react";
import { Link } from "react-router-dom";

const EventBanner = () => {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center text-light"
      style={{ backgroundImage: "url(assets/img/events-banner.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Latest Event</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/membership">
                  <i className="fas fa-clipboard-list"></i> Membership
                </Link>
              </li>
              <li className="active">Event</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
