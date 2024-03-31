const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilepicture: String,
    bio: String,
});

const userSchema = mongoose.model('user', user);

module.exports = userSchema;