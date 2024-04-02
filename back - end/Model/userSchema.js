const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilepicture: String,
    bio: String,
    role:String,
    interests:[{type:Object}],
    chats:[{type:mongoose.SchemaTypes.ObjectId,ref:'user'}]
});

const userSchema = mongoose.model('user', user);

module.exports = userSchema;