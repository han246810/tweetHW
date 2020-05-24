import React from 'react';
import {
    Link
} from "react-router-dom";


const initialState = {
    username: "",
    password: "",
    repeatPassword: "",
    usernameError: "",
    passwordError: ""
};

class SignupForm extends React.Component {
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

        if (this.state.password !== this.state.repeatPassword) {
            usernameError = "passwords are not the same";
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
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <input className="input-auth" type="text" placeholder="Username" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    <div style={{ fontSize: 10, color: "red" }}>
                        {this.state.usernameError}
                    </div>
                    <input className="input-auth" type="password" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <div style={{ fontSize: 10, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                    <input className="input-auth" type="password" placeholder="Repeat password" id="repeat-password" name="repeatPassword" value={this.state.repeatPassword} onChange={this.handleChange} />

                    <button className="btn-primary" type="submit" id="signup-btn">Sign up</button>
                </form>
                <h6 className="">Have an account?  <Link to='/login'>Log in</Link></h6>
            </div>

        )
    }
}

export default SignupForm;
