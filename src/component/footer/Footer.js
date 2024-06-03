import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-md-6 col-sm-6 item equal-height">
              <div className="f-item about">
                <h4>About</h4>
                <p>
                  The Muslim Student Association (MuSA) at Viadrina University
                  Frankfurt Oder is a vibrant community dedicated to supporting
                  and enriching the lives of Muslim students on campus. Our
                  mission is to foster an inclusive and welcoming environment
                  where students can grow spiritually, academically, and
                  socially. We organize a variety of events, from cultural
                  celebrations and educational workshops to community service
                  projects and interfaith dialogues. MuSA is committed to
                  promoting understanding, respect, and unity both within our
                  university and the broader community.
                </p>
                <ul>
                  <li>
                    <p>
                      Email
                      <span>
                        <a href="mailto:euv228927@europa-uni.de">
                          euv228927@europa-uni.de
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Office
                      <span>
                        Große Scharrnstraße 59, 15230 Frankfurt (Oder)
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* 
            <div className="col-md-2 col-sm-6 item equal-height">
              <div className="f-item link">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> All Courses
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Event
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Design & Branding
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Storytelling
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Education
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Geography
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 item equal-height">
              <div className="f-item link">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Forums
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Language Packs
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Release Status
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> LearnPress
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="ti-angle-right"></i> Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-md-4 col-sm-6 item equal-height">
              <div className="f-item popular-courses">
                <h4>Popular Posts</h4>
                {/* <ul>
                  <li>
                    <div className="thumb">
                      <a href="/#">
                        <img src="assets/img/800x800.png" alt="Thumb" />
                      </a>
                    </div>
                    <div className="info">
                      <a href="/#">
                        Subjects allied to Creative arts and design
                      </a>
                      <ul className="meta">
                        <li>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </li>
                        <li>(128) enrolled</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <a href="/#">
                        <img src="assets/img/800x800.png" alt="Thumb" />
                      </a>
                    </div>
                    <div className="info">
                      <a href="/#">Business and administrative subjects</a>
                      <ul className="meta">
                        <li>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>(98) enrolled</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <a href="/#">
                        <img src="assets/img/800x800.png" alt="Thumb" />
                      </a>
                    </div>
                    <div className="info">
                      <a href="/#">Business and administrative subjects</a>
                      <ul className="meta">
                        <li>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </li>
                        <li>(688) enrolled</li>
                      </ul>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                &copy; Copyright 2024. Rights Reserved by
                <a href="https://www.linkedin.com/in/zainuleb/"> zainuleb</a>
              </p>
            </div>
            {/* <div className="col-md-6 text-right link">
              <ul>
                <li>
                  <a href="/#">Terms of user</a>
                </li>
                <li>
                  <a href="/#">License</a>
                </li>
                <li>
                  <a href="/#">Support</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
