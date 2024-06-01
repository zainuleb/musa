import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="event-area default-padding">
      <div className="container">
        <div className="row">
          <div className="site-heading text-center">
            <div className="col-md-8 col-md-offset-2">
              <h2>Upcoming Events</h2>
              <p>
                Discourse assurance estimable applauded to so. Him everything
                melancholy uncommonly but solicitude inhabiting projection off.
                Connection stimulated estimating excellence an to impression.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="event-items">
              <div className="item">
                <div
                  className="col-md-5 thumb"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                ></div>
                <div className="col-md-7 info">
                  <div className="info-box">
                    <div className="date">
                      <strong>16</strong> Apr, 2020
                    </div>
                    <div className="content">
                      <h4>
                        <a href="#">Social Science & Humanities</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 8:00 - 16:00
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i> California,
                          TX 70240
                        </li>
                      </ul>
                      <p>
                        Attachment astonished to on appearance imprudence so
                        collecting in excellence. Tiled way blind lived whose
                        new. The for fully had she there leave merit enjoy
                        forth.
                      </p>
                      <div className="bottom">
                        <a
                          href="#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="#">
                          <i className="fas fa-ticket-alt"></i> 126 Available
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div
                  className="col-md-5 thumb"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                ></div>
                <div className="col-md-7 info">
                  <div className="info-box">
                    <div className="date">
                      <strong>08</strong> Jul, 2020
                    </div>
                    <div className="content">
                      <h4>
                        <a href="#">Secondary Schools United Nations</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 10:00 - 14:00
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i> California,
                          TX 70240
                        </li>
                      </ul>
                      <p>
                        Attachment astonished to on appearance imprudence so
                        collecting in excellence. Tiled way blind lived whose
                        new. The for fully had she there leave merit enjoy
                        forth.
                      </p>
                      <div className="bottom">
                        <a
                          href="#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="#">
                          <i className="fas fa-ticket-alt"></i> 58 Available
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="col-md-5 thumb"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                ></div>
                <div className="col-md-7 info">
                  <div className="info-box">
                    <div className="date">
                      <strong>19</strong> Aug, 2020
                    </div>
                    <div className="content">
                      <h4>
                        <a href="#">International Conference on Art Business</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 11:00 - 19:00
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i> California,
                          TX 70240
                        </li>
                      </ul>
                      <p>
                        Attachment astonished to on appearance imprudence so
                        collecting in excellence. Tiled way blind lived whose
                        new. The for fully had she there leave merit enjoy
                        forth.
                      </p>
                      <div className="bottom">
                        <a
                          href="#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="#">
                          <i className="fas fa-ticket-alt"></i> 256 Available
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn col-md-12 text-center">
            <a href="#" className="btn btn-theme effect btn-md">
              View All Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
