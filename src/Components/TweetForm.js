import React from 'react';

import sampleAvatar from '../Assets/sample-avatar.png'
import './TweetForm.css';


const initialState = {
    tweetContent: "",
    tweetContentError: ""
};
class TweetForm extends React.Component {
    state = initialState;

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {
        let tweetContentError = "";
        // console.log("validate is called");

        // let passwordError = "";

        if (!this.state.tweetContent) {
            tweetContentError = "tweetContent cannot be blank";

            if (tweetContentError) {
                this.setState({ tweetContentError });
                return false;
            }

            return true;
        };
    }

    handleSubmit = event => {
        // console.log('submit is called');
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

            <div className="tweet">
                <form id="tweet-form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <img className="avatar-sm v-top" src={sampleAvatar} alt="avatar" />
                        <textarea className="input-tweet" placeholder="What's up?" id="tweet-content" name="tweetContent" value={this.state.tweetContent} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="row tweet-actions">
                        <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                        <div style={{ fontSize: 10, color: "red" }}>
                            {this.state.tweetContentError}
                        </div>

                        <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                        <button className="btn-primary" type="submit" id="post-btn" >Post</button>
                        {/* disabled */}
                    </div>
                </form>
            </div>

        )
    }
}

export default TweetForm;
