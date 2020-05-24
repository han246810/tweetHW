import React from 'react';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import UserInform from './UserInform';
import './columns.css';
import './main.css';
class ProfileEdit extends React.Component {
    render() {
        return (

            <div className="container">
                <UserInform></UserInform>

                <TweetForm></TweetForm>
                <TweetList></TweetList>
            </div>
        )
    }
}

export default ProfileEdit;
