const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Chat Schema
const ChatSchema = mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const Chat = module.exports = mongoose.model('Chat',ChatSchema);

module.exports.getChats = function({},callback){
    Chat.find({},callback)
    .sort({ _id: -1 })
    .limit(30);
}

module.exports.addChat = function(newChat, callback){
    newChat.save(callback);
}