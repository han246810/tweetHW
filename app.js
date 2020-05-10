const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const tweets = require('./tweets');
const mongoose = require('mongoose');


//connect to database                { useNewUrlParser: true }
mongoose.connect('mongodb://localhost:127.0.0.1:27017/tweet', { useNewUrlParser: true }); //my local database is called tweet
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("Connection Successful!");
});
db.once('close', () => {
    console.log('Disconnection Successful!');
});




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));


//app.use(express.static("public"));
//app.use(express.static("./"));
app.locals.moment = require('moment');  //The will allow you to use moment in pug.

const index = require('./routes/index');
const profile = require('./routes/profile');

app.use('/', index);
app.use('/profile', profile);





app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404; //200
    next(err);
});

app.use((err, req, res, next) => {
    res.send(err.message);
});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});