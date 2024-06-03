import React from "react";

const EventList = () => {
  return (
    <div className="event-area flex-less default-padding">
      <div className="container">
        <div className="row">
          <div className="event-items">
            <div className="col-md-6 col-sm-6 equal-height">
              <div className="item">
                <div className="thumb">
                  <img src="assets/img/eid2024-bbq.png" alt="eid2024-bbq" />
                </div>
                <div className="info">
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
                        {/* Attachment astonished to on appearance imprudence so
                        collecting in excellence. Tiled way blind lived whose
                        new. The for fully had she there leave merit enjoy
                        forth. */}
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
            </div>

            <div className="col-md-6 col-sm-6 equal-height">
              <div className="item">
                <div className="thumb">
                  <img src="assets/img/800x600.png" alt="Thumb" />
                </div>
                <div className="info">
                  <div className="info-box">
                    <div className="date">
                      <strong>22</strong> April, 2024
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/#">Eid El Fitr</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 14:00 - 16:00
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i> Große
                          Scharrnstraße 59 15230 Frankfurt (Oder)
                        </li>
                      </ul>
                      <p>
                        {/* Attachment astonished to on appearance imprudence so
                        collecting in excellence. Tiled way blind lived whose
                        new. The for fully had she there leave merit enjoy
                        forth. */}
                      </p>
                      <div className="bottom">
                        <a
                          href="/#"
                          className="btn circle btn-dark border btn-sm"
                        >
                          <i className="fab fa-instagram"></i> View Highlights
                        </a>
                        {/* <a href="/#">
                          <i className="fas fa-ticket-alt"></i> 40 Spots
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="col-md-6 col-sm-6 equal-height">
              <div className="item">
                <div className="thumb">
                  <img src="assets/img/800x600.png" alt="Thumb" />
                </div>
                <div className="info">
                  <div className="info-box">
                    <div className="date">
                      <strong>19</strong> Aug, 2020
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/#">International Conference</a>
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
              </div>
            </div>

            <div className="col-md-6 col-sm-6 equal-height">
              <div className="item">
                <div className="thumb">
                  <img src="assets/img/800x600.png" alt="Thumb" />
                </div>
                <div className="info">
                  <div className="info-box">
                    <div className="date">
                      <strong>26</strong> Jul, 2020
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/#">Leadership Network Seminar</a>
                      </h4>
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i> 08:00 - 16:00
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
              </div>
            </div> */}
          </div>
          {/* <div className="more-btn col-md-12 text-center">
            <a href="/#" className="btn btn-theme effect btn-md">
              View All Events
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventList;
