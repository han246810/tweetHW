import React from 'react';
import {
    Link
} from "react-router-dom";

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};
class LoginForm extends React.Component {
    state = initialState;

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {
        let usernameError = "";
        let passwordError = "";

        // let passwordError = "";

        if (!this.state.username) {
            usernameError = "username cannot be blank";
        }
        if (!this.state.password) {
            usernameError = "password cannot be blank";
        }

        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };


    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <input className="input-auth" type="text" placeholder="Username" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    <div style={{ fontSize: 10, color: "red" }}>
                        {this.state.usernameError}
                    </div>
                    <input className="input-auth" type="password" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <div style={{ fontSize: 10, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                    <button className="btn-primary" type="submit" id="login-btn">Log in</button>


                    <h6>New to Web Tweet? <Link to='/signup'>Sign up Now</Link></h6>
                </form>
            </div>
        )
    }
}

export default LoginForm;
