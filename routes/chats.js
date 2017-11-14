const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Chat = require('../models/chats');

// Send Chat to DB
router.post('/postChat', (req,res,next) => {
    let newChat = new Chat({
        name: req.body.name,
        username: req.body.username,
        message: req.body.message,
        timeZone: req.body.timeZone,
        utcString: req.body.utcString
    });

    Chat.addChat(newChat, (err, chat) => {
        if(err){
            res.json({success: false, msg: 'Failed to send chat'});
        } else {
            res.json({success:true, msg: "Chat sent successfully"});
        }
    });
});

// Retrieve Names, Usernames, and Chats
router.get('/getInfo', (req,res,next) => {
    let newChat = new Chat({
        name: req.body.name,
        username: req.body.username,
        message: req.body.message,
        timeZone: req.body.timeZone,
        gmtString: req.body.utcString
    });

    Chat.getChats(newChat,(err,chat)=>{
        if(err) {
            res.send('There was a problem retrieving chats');
            next();
        } else {
            res.json(chat);
        }
    });
});

module.exports = router;