"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TweetsSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  imageUrl: String,
  author: {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    location: String,
    bio: String,
    avatarUrl: {
      type: String,
      "default": 'img/webdxd.png'
    }
  },
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
});
var Tweets = mongoose.model('Tweets', TweetsSchema);
module.exports = Tweets;