import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import * as actions from "../../store/actions";

class LoginNew extends Component {
    onSubmitHandler = (e) => {
        e.preventDefault();
        // const fd = {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        // }
        const fd = new FormData();
        fd.append('email', e.target.email.value);
        fd.append('password', e.target.password.value);

        this.props.signin(fd, () => {
            this.props.history.push('/fileUpload')
        });
    }

    showSignOut = () => this.props.authenticated ? (<Link to="/signout">Sign Out</Link>) : ("");

    render() {
        return (
            <div>
                This is login Page!!
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {this.showSignOut()}

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.clear();
    console.log(state)
    return {
        authenticated: state.auth.authenticated,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, actions)(LoginNew)