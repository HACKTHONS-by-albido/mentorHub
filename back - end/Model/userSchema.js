const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilepicture: String,
    role: String,
    interests: [{ type: Object }],
    chats: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'conversation' }],
    profession: String,
    phonenumber: String,
    place: String,
    latesteducation: String,
    about: String,
    languages: [{ type: String }],
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], 
            default: [0, 0] 
        }
    }
});

const userSchema = mongoose.model('user', user);

module.exports = userSchema;
