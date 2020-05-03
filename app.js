//https://github.com/nax3t/webdevbootcamp/blob/master/IntroToExpress/FirstExpressApp/app.js
var express = require('express');
var app = express();
var router = express.Router();
let data = [{ "msg": "msg1" }, { "msg": "msg2" }, { "msg": "msg3" }];

// define the home page route
router.get('/', function (req, res) {

	res.send('tweet home page');
});

router.get('/tweets', function (req, res) {

	res.json(data);
});

router.post('/tweet/new', function (req, res) {
	console.log('Got body:', req.body);
	res.json({ message: 'new tweet' });
});


router.delete('/tweets/:id', function (req, res) {
	console.log('delete: ', req.params.id);
	res.status(200).send('Got a DELETE request at user:' + req.params.id);
});

// router.get("*", function (req, res) {
// 	res.send("YOU ARE A STAR!!!");
// });

app.use('/', router);
app.listen(3000, function () {
	console.log("Live at Port 3000");
});