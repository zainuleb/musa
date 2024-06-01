import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="home">
      <nav className="navbar navbar-default bg-dark white navbar-sticky bootsnav">
        <div className="container">
          <div className="row">
            <div className="top-search">
              <div className="input-group">
                <form action="#">
                  <input
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="attr-nav">
            <ul>
              <li className="search">
                <a href="#">
                  <i className="ti-search"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo-light.png" alt="Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li className="dropdown">
                <Link to="/">Home</Link>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="index.html">Home Version One</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Version Two</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Version Three</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home Version Four</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home Version Five</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home Version Six</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home Version Seven</a>
                  </li>
                  <li>
                    <a href="index-8.html">Home Version Eight</a>
                  </li>
                  <li>
                    <a href="index-9.html">Home Version Nine</a>
                  </li>
                  <li>
                    <a href="index-10.html">Home Version Ten</a>
                  </li>
                  <li>
                    <a href="index-op.html">Home Onepage</a>
                  </li>
                  <li>
                    <a href="index-op-2.html">
                      Home Onepage Two <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-op-3.html">
                      Home Onepage Three <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-op-4.html">
                      Home Onepage Four <span className="badge">New</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Gallery
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="gallery-grid-colum.html">Grid Colum</a>
                      </li>
                      <li>
                        <a href="gallery-masonary-colum.html">Masonary Colum</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="404.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="courses-grid.html">Course Grid</a>
                  </li>
                  <li>
                    <a href="courses-carousel.html">Course Carousel</a>
                  </li>
                  <li>
                    <a href="course-details.html">Course Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  Teachers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="advisor-carousel.html">Advisor Carousel</a>
                  </li>
                  <li>
                    <a href="advisor-grid.html">Advisor Grid</a>
                  </li>
                  <li>
                    <a href="advisor-details.html">Advisor Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  Event
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="event-1.html">Event Version One</a>
                  </li>
                  <li>
                    <a href="event-2.html">Event Version Two</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single Standard</a>
                  </li>
                  <li>
                    <a href="blog-single-left-sidebar.html">
                      Single Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-right-sidebar.html">
                      Single Right Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
