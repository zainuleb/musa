import React from "react";

const Header = () => {
  return (
    <header className="th-header header-layout1">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fal fa-calendar-days"></i>
                    <a href="blog.html">20 August, 2023</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="theme-toggler" href="/#">
                      <span className="dark">
                        <i className="fas fa-moon"></i>Dark Mode
                      </span>
                      <span className="light">
                        <i className="fas fa-sun-bright"></i>Light Mode
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li className="d-none d-sm-inline-block">
                    <i className="far fa-user"></i>
                    <a href="blog.html">Login / register</a>
                  </li>
                  <li>
                    <div className="social-links">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-auto d-none d-lg-block">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="home-newspaper.html">
                    <img
                      className="light-img"
                      src="assets/img/logo.svg"
                      alt="Tnews"
                    />
                  </a>
                  <a href="home-newspaper.html">
                    <img
                      className="dark-img"
                      src="assets/img/logo-white.svg"
                      alt="Tnews"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 text-end">
              <div className="header-ads">
                <a href="https://themeforest.net/user/themeholy/portfolio">
                  <img
                    className="light-img"
                    src="assets/img/ads/ads_banner_1.jpg"
                    alt="ads"
                  />
                  <img
                    className="dark-img"
                    src="assets/img/ads/ads_banner_1_dark.jpg"
                    alt="ads"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto d-lg-none d-block">
                <div className="header-logo">
                  <a href="home-newspaper.html">
                    <img src="assets/img/logo-white.svg" alt="Tnews" />
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="home-newspaper.html">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-newspaper.html">Home Newspaper</a>
                        </li>
                        <li>
                          <a href="home-magazine.html">Home Magazine</a>
                        </li>
                        <li>
                          <a href="home-sports.html">Home Sports</a>
                        </li>
                        <li>
                          <a href="home-movie.html">Home Movie</a>
                        </li>
                        <li>
                          <a href="home-gadget.html">Home Gadget</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/#">Category</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="category.html">Category</a>
                        </li>
                        <li>
                          <a href="blog-three-column.html">Three Column</a>
                        </li>
                        <li>
                          <a href="blog-three-column-sidebar.html">
                            Three Column Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="/#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="author.html">Author</a>
                        </li>
                        <li>
                          <a href="error.html">Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-masonary.html">Blog Masonary</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="blog-details-video.html">
                            Blog Details Video
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-audio.html">
                            Blog Details Audio
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-nosidebar.html">
                            Blog Details Nosidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-full-img.html">
                            Blog Details Full Image
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-auto">
                <div className="header-button">
                  <button
                    type="button"
                    className="simple-icon searchBoxToggler"
                  >
                    <i className="far fa-search"></i>
                  </button>
                  <button
                    type="button"
                    className="simple-icon d-none d-lg-block cartToggler"
                  >
                    <i className="far fa-cart-shopping"></i>
                    <span className="badge">5</span>
                  </button>
                  <a
                    href="/#"
                    className="icon-btn sideMenuToggler d-none d-lg-block"
                  >
                    <i className="far fa-bars"></i>
                  </a>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
