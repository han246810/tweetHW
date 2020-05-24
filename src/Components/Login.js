import React from 'react';
import LoginForm from './LoginForm';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import './columns.css';
import './main.css';

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <LoginForm></LoginForm>
                <div className="col-3of5 bg-white">
                    <TweetForm></TweetForm>
                    <TweetList></TweetList>
                </div>
            </div >
        )
    }
}

export default Login;
