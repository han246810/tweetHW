const express = require('express');
const router = express.Router();

const utils = require('../utils');
const Tweets = require('../models/tweets');
const Users = require('../models/users');


router.get('/', utils.requireLogin, (req, res) => {
  var userId = req.user._id.toString();
  // console.log("req id: ", userId); // req.session._id  res.locals.currentUser req.user._id
  Tweets.find({ author: req.user._id }).sort({ createdAt: -1 }).populate('author').exec((err, tweets) => {

    // console.log("profile tweets: ", tweets[0].author.avatarUrl);
    // tweets.forEach((item, index) => {
    //   console.log("profile tweets: ", item.author.username);
    // })
    if (err) { console.log("profile: ", err) }
    // res.render('profile', { tweets: tweets, user: req.user });
    // res.locals.user = {
    //   avatarUrl: "/img/webdxd.png",
    //   name: "from profile name",
    //   username: "from profile usernamename",
    //   bio: "from profile bio"
    // };

    // var tweets = {
    //   testpass: "testpass",
    //   author: {
    //     avatarUrl: "/img/webdxd.png",
    //     name: "from profile name",
    //     username: "from profile usernamename",
    //     bio: "from profile bio"
    //   }
    // };

    // var tweets = [{
    //   testpass: "testpass",
    //   author: {
    //     avatarUrl: "/img/webdxd.png",
    //     name: "from profile name",
    //     username: "from profile usernamename",
    //     bio: "from profile bio"
    //   }
    // },
    // {
    //   testpass: "testpass2",
    //   author: {
    //     avatarUrl: "/img/webdxd.png",
    //     name: "from profile name2",
    //     username: "from profile usernamename2",
    //     bio: "from profile bio2"
    //   }
    // }];

    res.render('profile.pug', {
      tweets: tweets,
      // user: { name: "profile name", username: "profile username" }
      user: req.user
    });
  });
  // res.render('profile');
});

router.get('/edit', utils.requireLogin, (req, res) => {

  res.render('editProfile');
});


//edit tweet
router.get('/editTweet', utils.requireLogin, (req, res) => {
  var tweetId = req.query.tweetId;
  console.log('get editTweetId: ', tweetId);


  Tweets.findById(tweetId).populate('author').exec((err, tweet) => {
    if (err) { console.log("update Tweet error: ", err) }
    console.log("editTweet: ", tweet.author.name);
    // var oldContent = JSON.stringify(tweet.content);
    // var oldContent = tweet.content;
    var oldTweet = tweet;

    // typeof ("iAmAString");
    console.log("editTweet: ", typeof (tweet.content));
    // res.render('editTweet', { oldContent: oldContent });
    res.render('editTweet', { tweet: oldTweet });
  });
  // res.redirect('/profile');
});





// insert a new tweet
router.post('/newTweet', utils.requireLogin, (req, res) => {
  console.log('From from data.........................');
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

  res.redirect('/profile');
});



//update tweet
router.post('/updateTweet', utils.requireLogin, (req, res) => {
  var tweetId = req.body.tweetId;
  var tweetNewContent = req.body.updtaeTweetContent;
  console.log('Update tweet: ', tweetId);
  console.log('Update tweetContent: ', tweetNewContent);

  Tweets.findByIdAndUpdate(tweetId, { "content": tweetNewContent }, (err, result) => {

    if (err) {
      res.send(err);
    }
    else {
      console.log("update tweet successfully");
      res.redirect('/profile');
    }

  })

});

//delete tweet
router.get('/deleteTweet', utils.requireLogin, (req, res) => {
  console.log('delete page........................');
  var tweetId = req.query.tweetId;
  console.log('deleteTweet tweet: ', tweetId);
  Tweets.deleteOne({ _id: tweetId }, (err) => {
    // Tweets.find({ _id: tweetId }).exec((err, tweets) => {
    if (err) console.log(err);
    console.log("Successful deletion");
    res.redirect('/profile');
  });

});





router.post('/edit', utils.requireLogin, (req, res) => {
  Users.update({ _id: req.user._id }, req.body, (err) => {
    if (err) {
      return next(err);
    } else {
      return res.redirect('/profile')
    }
  });
});

router.post('/avatar', utils.requireLogin, (req, res) => {
  Users.update({ _id: req.user._id }, req.body, (err) => {

    if (err) {
      return next(err);
    } else {
      return res.json({ success: true })
    }
  });
});


module.exports = router;
