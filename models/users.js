const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    location: String,
    bio: String,
    avatarUrl: { type: String, default: '/img/webdxd.png' }
});

UsersSchema.plugin(passportLocalMongoose);

const Users = mongoose.model('Users', UsersSchema);
// Users.create({
//     name: "Hi1",
//     username: "Hello1",
//     location: "Vancouver",
//     bio: "hello world!"
// });

module.exports = Users;