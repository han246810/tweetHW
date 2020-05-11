const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetsSchema = new Schema({
    content: { type: String, required: true },
    imageUrl: String,
    author: {
        name: { type: String, required: true },
        username: { type: String, required: true },
        location: String,
        bio: String,
        avatarUrl: { type: String, default: '/img/webdxd.png' }
    },
    createdAt: { type: Date, required: true, default: Date.now }
});

const Tweets = mongoose.model('Tweets', TweetsSchema);

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
//     });

module.exports = Tweets;