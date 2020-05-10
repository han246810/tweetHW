"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    requried: true
  },
  location: String,
  bio: String,
  avatarUrl: {
    type: String,
    "default": '/img/webdxd.png'
  }
});
var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;