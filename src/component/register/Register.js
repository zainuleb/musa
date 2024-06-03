import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    studentId: "",
    areaOfInterest: "",
    membershipAgreement: false,
    activeParticipation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };

  return (
    <div className="login-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form
              onSubmit={handleSubmit}
              id="login-form"
              className="white-popup-block"
            >
              <div className="login-custom">
                <div className="heading">
                  <h4>
                    <i className="fas fa-edit"></i> Register Now
                  </h4>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Name*"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Email Address*"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Phone Number"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Student ID*"
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                      >
                        <option value="">Area of Interest in MuSA*</option>
                        <option value="Event Planning and Organization">
                          Event Planning and Organization
                        </option>
                        <option value="Dialogue and Outreach">
                          Dialogue and Outreach
                        </option>
                        <option value="Educational Workshops">
                          Educational Workshops
                        </option>
                        <option value="Community Support and Welfare">
                          Community Support and Welfare
                        </option>
                        <option value="Public Relations and Communications">
                          Public Relations and Communications
                        </option>
                        <option value="Administrative Support">
                          Administrative Support
                        </option>
                        <option value="Research and Development">
                          Research and Development
                        </option>
                        <option value="Art and Cultural Exhibitions">
                          Art and Cultural Exhibitions
                        </option>
                        <option value="Sports and Recreation">
                          Sports and Recreation
                        </option>
                        <option value="Volunteer Coordination">
                          Volunteer Coordination
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <label>
                        <input
                          type="checkbox"
                          name="membershipAgreement"
                          checked={formData.membershipAgreement}
                          onChange={handleChange}
                        />
                        I have read and agree to abide by the bylaws of the
                        Viadrina Muslim Association. Link to bylaws.*
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="form-group">
                      <label>
                        <input
                          type="checkbox"
                          name="activeParticipation"
                          checked={formData.activeParticipation}
                          onChange={handleChange}
                        />
                        I commit to participate in the activities of the
                        association as per my selected areas of interest.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <button type="submit">Register</button>
                  </div>
                </div>
                {/* <p className="link-bottom">
                  Are you a member? <a href="#">Login now</a>
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
