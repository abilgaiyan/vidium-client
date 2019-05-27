import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actions from "../../store/actions";


class SignUpNew extends Component {
    onSubmitHandler = (e) => {
        e.preventDefault();
        const fd = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        // const fd = new FormData();
        // fd.append('name', e.target.name.value);
        // fd.append('email', e.target.email.value);
        // fd.append('password', e.target.password.value);

        this.props.signup(fd, () => {
            this.props.history.push('/signin')
        });
    }

    render() {
        return (
            <div>
                SignUp Page
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, actions)(SignUpNew)
