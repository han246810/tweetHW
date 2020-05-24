import React from 'react';

import TweetList from './TweetList';
import TweetForm from './TweetForm';
import UserInform from './UserInform';
import './columns.css';
import './main.css';
class Profile extends React.Component {
  render() {
    return (

      <div className="container">
        <UserInform profilePage={"true"}></UserInform>

        <div className="col-3of5 bg-white">
          <TweetForm></TweetForm>
          <TweetList></TweetList>
        </div>
      </div>
    )
  }
}

export default Profile;
