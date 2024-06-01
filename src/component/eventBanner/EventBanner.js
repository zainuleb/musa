import React from "react";

const EventBanner = () => {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center text-light"
      style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Latest Event</h1>
            <ul className="breadcrumb">
              <li>
                <a href="/#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="/#">Page</a>
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
