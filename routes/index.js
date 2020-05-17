const express = require('express');
const passport = require('passport');

const router = express.Router();
const Tweets = require('../models/tweets');
const Users = require('../models/users');
const utils = require('../utils');

router.get('/', utils.requireLogin, (req, res) => {
  Tweets.find({}).sort({ createdAt: -1 }).populate('author').exec((err, tweets) => {
    // console.log("homepage:  ", tweets.content);
    res.render('index', { tweets });
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const { username, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    Users.register(new Users({ username, name: username }), password, (err, user) => {
      if (err) {
        return next(err)
      }

      passport.authenticate('local')(req, res, () => {
        return res.redirect('/');
      });
    });
  } else {
    return next({ message: 'Password does not match' })
  }
});


// insert a new tweet
router.post('/newTweet', utils.requireLogin, (req, res) => {
  var userId = req.user._id.toString();
  console.log("req id: ", userId);
  var newTweetContent = req.body.tweetContent;
  console.log("new Tweet content: ", newTweetContent);

  var newTweet = new Tweets({
    content: newTweetContent,
    author: userId
  });

  newTweet.save(function (err) {
    if (err) throw err;
    console.log('tweet successfully saved.');
  });
  res.redirect('/');
});



router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
