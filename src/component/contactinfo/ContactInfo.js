import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info-area default-padding">
      <div className="container">
        <div className="contact-info text-center">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="info">
                  <h4>Call Us</h4>
                  <span>+324 119 2343</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-location"></i>
                </div>
                <div className="info">
                  <h4>Address</h4>
                  <span>California, TX 70240</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="info">
                  <h4>Email Us</h4>
                  <span>info@yourdomain.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row contact-bottom-info">
          <div className="maps-form">
            <div className="col-md-6 maps">
              <h4>Our Location</h4>
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.5527301746474!2d14.55124217592476!3d52.34225974937469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470798747e6996a9%3A0xcd01cc677c44a5b3!2sEuropa-Universit%C3%A4t%20Viadrina!5e0!3m2!1sen!2sde!4v1717238686149!5m2!1sen!2sde"
                  title="viadrinaMap"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 form">
              <div className="heading">
                <h4>Contact Us</h4>
              </div>
              <form
                action="assets/mail/contact.php"
                method="POST"
                className="contact-form"
              >
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        type="email"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="text"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group comments">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        placeholder="Tell Me About Courses *"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <button type="submit" name="submit" id="submit">
                      Send Message <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>

                <div className="col-md-12 alert-notification">
                  <div id="message" className="alert-msg"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
