//https://github.com/nax3t/webdevbootcamp/blob/master/IntroToExpress/FirstExpressApp/app.js
var express = require('express');
var app = express();
var router = express.Router();
const fs = require('fs');
const path = require('path');
// var bodyParser = require('body-parser');

const tweetDir = path.join(__dirname, '/data');


// define the home page route
router.get('/', function (req, res) {
    res.send('tweet home page');
});

router.get('/tweets', function (req, res) {
    var tweetLs = [];
    var itemsProcessed = 0;
    fs.readdir(tweetDir, function (err, files) {
        console.log('totalFiles: ' + files.length);
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
            fs.readFile(path.join(tweetDir, file), (err, data) => {
                if (err) throw err;
                let tweet = JSON.parse(data);
                console.log(tweet);
                tweetLs.push(tweet);
                // console.log('read file: ' + JSON.stringify(tweetLs));
                itemsProcessed++;
                if (itemsProcessed === files.length) {
                    res.send("tweets: " + JSON.stringify(tweetLs));
                }
            });

            // console.log('after read files');
        });
        console.log('after read directory');
    });

});

app.use(express.json());
app.use(express.urlencoded());


//test [{"content":"post1"},{"content":"post2"}]
router.post('/tweet/new', function (req, res) {
    // console.log('Got body:' + JSON.stringify(req.body));
    // res.json({ message: ' A new tweet has created' });

    var newTweet = JSON.stringify(req.body);
    var newFileName = path.join(tweetDir, `new${Date.now()}.json`);
    fs.writeFile(newFileName, newTweet, function (err) {
        if (err) {
            console.error(err);
        } else {
            res.send(' A new tweet has created');
            console.log('Add new user to userInfo...');
        }

    });

});

//test {"content": "message2" }
app.put('/tweets/:filename', function (req, res) {
    var updateFile = req.params.filename;
    console.log('fileName: ' + updateFile);
    var fileDir = path.join(tweetDir, `${updateFile}.json`);
    //console.log('file directory: ' + fileDir);

    //new content
    var newContent = JSON.stringify(req.body);
    console.log('newContent: ' + newContent);

    //determine if file exist
    fs.stat(fileDir, function (err) {
        if (!err) {
            console.log('file exists');
        }
        else if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
        }
    });


    fs.readFile(fileDir, (err, data) => {
        if (err) { throw err };
        var OldJson = JSON.parse(data);
        OldJson.push(newContent);

        // fs.writeFile(fileDir, JSON.stringify(OldJson));
        fs.writeFile(fileDir, JSON.stringify(OldJson), function (err) {
            if (err) {
                console.error(err);
            } else {
                res.send(updateFile + ' has updated');
                console.log(updateFile + ' has updated');
            }

        });
    })
});





router.delete('/tweets/:id', function (req, res) {
    // console.log('delete: ', req.params.id);
    // res.status(200).send('Got a DELETE request at user:' + req.params.id);

    var updateFile = req.params.id;
    console.log('fileName: ' + updateFile);
    var fileDir = path.join(tweetDir, `${updateFile}.json`);
    //console.log('path: ' + fileDir);
    //determine if file exist
    fs.stat(fileDir, function (err) {
        if (!err) {
            console.log('file exists');
            fs.unlink(fileDir, (err) => {
                if (err) throw err;
                console.log(updateFile, '.json was deleted');
                res.send(`${updateFile}.json was deleted`);
            });
        }
        else if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
            res.send('file or directory does not exist');
        }
    });

});

router.get("*", function (req, res) {
    res.send("YOU ARE A STAR!!!");
});

app.use('/', router);
app.listen(3000, function () {
    console.log("Live at Port 3000");
});