import React, { Component } from 'react'
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signup extends Component {
    onSubmit = formProps => {
        // console.log(formProps)
        this.props.signup(formProps, () => {
            this.props.history.push('/fileUpload')
        });
    }

    render() {
        const { error, handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="container h-300 sign_in ">
                <div className="row h-100 justify-content-center align-items-center ">
                    <h3 className="logo_text text-center col-12">Vidium</h3>
                    <div className="text-center col-12 mb-5 "><img src={logo} className="mx-auto d-block " style={{ "height": "154px" }} alt="sitelogo"></img></div>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <div className="input-group input_round top">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <Field type="text" name="email" component="input" autoComplete="none" className="form-control" placeholder="UserName" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">@example.com</span>
                                        </div>
                                    </div>
                                    <div className="help-block with-errors text-danger"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="input-group input_round bottom">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <Field type="password" name="password" component="input" autoComplete="none" className="form-control" placeholder="Vidium Password" />
                                    </div>
                                    <div className="help-block with-errors text-danger"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button type="submit" disabled={pristine || submitting} className="btn btn-primary btn-lg btn-block">Sign Up / Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="chiller_cb">
                                    <input id="myCheckbox" type="checkbox" />
                                    <label htmlFor="myCheckbox">Checkbox checked</label>
                                    <span></span>
                                </div>
                                {/* <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />Remember Me
                                    </label>
                                </div> */}
                            </div>
                            <div className="col">
                                <Link className="form-link" to="/">CooKies Policy</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link className="form-link" to="/">Forgot Password</Link>
                            </div>
                            <div className="col">
                                <Link className="form-link" to="/">Vidium Password Policy</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link className="form-link" to="/">Know More About Login Process</Link>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
            // <form onSubmit={handleSubmit(this.onSubmit)}>
            //     <fieldset>
            //         <label>Email</label>
            //         <Field type="text" name="email" component="input" autoComplete="none" />
            //     </fieldset>
            //     <fieldset>
            //         <label>Password</label>
            //         <Field type="password" name="password" component="input" autoComplete="none" />
            //     </fieldset>
            //     <div>{this.props.errorMessage}</div>
            //     <button>Sign In</button>
            // </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Signup)