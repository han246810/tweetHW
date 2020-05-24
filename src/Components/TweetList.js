import React from 'react';
import './TweetList.css';
import avatar from '../Assets/avatar.jpg'
class TweetList extends React.Component {

    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;
        }
        return (
            <React.Fragment>
                {this.state.people.map(person => (
                    // <div className="tweet" key={person.name.first + person.name.last}>
                    //     <div>{person.name.title}</div>
                    //     <div>{person.name.first}</div>
                    //     <div>{person.name.last}</div>
                    //     <img src={person.picture.large} />
                    // </div>

                    <div className="tweet" key={person.name.first + person.name.last}>
                        <div className="row"><img className="avatar-sm" src={avatar} alt="avatar" />
                            <h4><b>{person.name.first}</b></h4>
                            <h5>@{person.name.last}</h5>
                            <h5>May 16, 2020 06:56 AM</h5>
                        </div>
                        <p>{person.name.title}
                            <img src={person.picture.large} />
                        </p>
                    </div>

                ))}
            </React.Fragment>
        );
    }
}

export default TweetList;
