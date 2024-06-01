import React from 'react'

const MembershipsForm = () => {
  return (
    <div className="login-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form action="#" id="login-form" className="white-popup-block">
                        <div className="login-custom">
                            <div className="heading">
                                <h4><i className="fas fa-edit"></i> Register Now</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email*" type="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Username*" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password*" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Repeat Password*" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <button type="submit">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                            <p className="link-bottom">Are you a member? <a href="#">Login now</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MembershipsForm
