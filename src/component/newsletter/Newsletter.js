import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-area fixed">
      <div className="container">
        <div
          className="subscribe-items shadow theme-hard default-padding bg-cover"
          style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
        >
          <div className="row">
            <div className="col-md-7 left-info">
              <div className="info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="info">
                  <h3>Subscribe to our newsletter</h3>
                  <p>
                    Prospect humoured mistress to by proposal marianne attended.
                    Simplicity the far admiration preference everything.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your e-mail here"
                    className="form-control"
                    name="email"
                  />
                  <button type="submit">
                    Subscribe <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
