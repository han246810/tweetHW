import React from 'react';
import {
    Link
} from "react-router-dom";
import avatar from '../Assets/avatar.jpg'


class UserInform extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('test this.props.profilePage: ', this.props.profilePage);
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={avatar} alt="avatar" />
                <h3>Yan Hong</h3>
                <h5>@honlyan</h5>
                <h4>Vancouver</h4>
                <p className="center">Director of EduHacks * Digital Ocean Vancouver Meetup Co-organizer * CEO of HackHub * Founder of Inverse Technology Inc.</p>


                {this.props.profilePage === "true" &&
                    <React.Fragment>
                        <Link to='/profile-edit' className="btn-border space-top">Edit profile</Link>
                        <button className="btn-border space-top" id="logout-btn">Log out</button>
                    </React.Fragment>

                }

            </div>
        )
    }
}

export default UserInform;
