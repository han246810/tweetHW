"use strict";

var express = require('express');

var app = express();

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var path = require('path');

var tweets = require('./tweets');

var mongoose = require('mongoose'); //connect to database                { useNewUrlParser: true }


mongoose.connect('mongodb://localhost:127.0.0.1:27017/tweet', {
  useNewUrlParser: true
}); //my local database is called tweet

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection Successful!");
});
db.once('close', function () {
  console.log('Disconnection Successful!');
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express["static"](path.join(__dirname, 'public'))); //app.use(express.static("public"));
//app.use(express.static("./"));

app.locals.moment = require('moment'); //The will allow you to use moment in pug.

var index = require('./routes/index');

var profile = require('./routes/profile');

app.use('/', index);
app.use('/profile', profile);
app.use(function (req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404; //200

  next(err);
});
app.use(function (err, req, res, next) {
  res.send(err.message);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});