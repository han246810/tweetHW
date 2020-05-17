const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = require('../models/users');

const TweetsSchema = new Schema({
    content: { type: String, required: true },
    imageUrl: String,
    // author: {
    //     name: { type: String, required: true },
    //     username: { type: String, required: true },
    //     location: String,
    //     bio: String,
    //     avatarUrl: { type: String, default: '/img/webdxd.png' }
    // },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    createdAt: { type: Date, required: true, default: Date.now }
});

const Tweets = mongoose.model('tweets', TweetsSchema);

// Tweets.create(
//     {
//         content: "test123",
//         imageUrl: "https://images.unsplash.com/photo-1546034353-c8d3534c20fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80",
//         author: {
//             name: "Hi",
//             username: "Hello",
//             location: "Vancouver",
//             bio: "Hello world!",
//             avatarUrl: ''
//         }
//     }, (err) => {
//         if (!err) {
//             console.log("Created Tweets model successfully");
//         } else {
//             console.log("Tweets model insert error");
//         }
//     });

// //create a new user
// var newUser = Users({
//     name: "newName1",
//     username: "newUserName1",
//     location: "Vancouver",
//     bio: "Creating a new user!"
// });
// newUser.save(function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     var newTweet = new Tweets({
//         content: "Hello World!",
//         imageUrl: "https://images.unsplash.com/photo-1570987987496-6336aa7ed5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
//         author: newUser._id

//     });

//     newTweet.save(function (err) {
//         if (err) throw err;

//         console.log('tweet successfully saved.');
//     });
// });


Tweets
    .find({

    })
    .populate('author', 'name username location bio avatarUrl ') //加上这句话也就有了属性值, 
    .exec(function (err, tweets) {
        // if (err) { console.log(err) }
        if (err) throw err;
        // console.log("tweets page: ", tweets.author);//this return an arrray...
    });

module.exports = Tweets;
