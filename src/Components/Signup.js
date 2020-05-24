import React from 'react';
import SignupForm from './SignupForm';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import './columns.css';
import './main.css';


class Signup extends React.Component {
    render() {
        return (
            <div className="container">
                <SignupForm></SignupForm>
                <div className="col-3of5 bg-white">
                    <TweetForm></TweetForm>
                    <TweetList></TweetList>
                </div>
            </div>
        )
    }
}

export default Signup;
