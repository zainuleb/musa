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
          {/* <div className="attr-nav">
            <ul>
              <li className="search">
                <a href="/#">
                  <i className="ti-search"></i>
                </a>
              </li>
            </ul>
          </div> */}
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
              <img
                src="assets/img/logo-light.png"
                alt="Logo"
                width={"85px"}
                height={"185px"}
              />
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
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
