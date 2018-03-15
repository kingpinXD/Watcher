const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    googleId:String,
    userName:String
});

mongoose.model('users',UserSchema);