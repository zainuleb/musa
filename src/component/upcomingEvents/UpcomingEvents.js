import React from "react";
import { Link } from "react-router-dom";
const UpcomingEvents = () => {
  return (
    <div className="event-area default-padding">
      <div className="container">
        <div className="row">
          <div className="site-heading text-center">
            <div className="col-md-8 col-md-offset-2">
              <h2>Upcoming Event/s</h2>
              <p>
                Participate in exciting events, from cultural celebrations to
                interfaith dialogues.
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
                  style={{ backgroundImage: "url(assets/img/eid2024-bbq.png)" }}
                ></div>
                <div className="col-md-7 info">
                  <div className="info-box">
                    <div className="date">
                      <strong>16</strong> June, 2024
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/#">Eid el Adha BBQ</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 16:00 - 20:00
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i> Garden,
                          August- Bebel- Str.15234 Frankfurt (Oder)
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
                          href="/#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="/#">
                          <i className="fas fa-ticket-alt"></i> 40 Spots
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="item">
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
                        <a href="/#">Secondary Schools United Nations</a>
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
                          href="/#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="/#">
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
                        <a href="/#">
                          International Conference on Art Business
                        </a>
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
                          href="/#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fas fa-chart-bar"></i> Book Now
                        </a>
                        <a href="/#">
                          <i className="fas fa-ticket-alt"></i> 256 Available
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="more-btn col-md-12 text-center">
            <Link to={"events"} className="btn btn-theme effect btn-md">
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
