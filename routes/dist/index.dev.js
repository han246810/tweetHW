"use strict";

var express = require('express');

var router = express.Router();

var Tweets = require('../models/tweets');

router.get('/', function (req, res) {
  // res.render('index', { tweets });
  Tweets.find({}, function (err, tweets) {
    res.render('index', {
      tweets: tweets
    });
  });
});
router.get('/login', function (req, res) {
  res.render('login');
});
router.get('/signup', function (req, res) {
  res.render('signup');
});
module.exports = router;