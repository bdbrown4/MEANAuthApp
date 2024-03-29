const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const app = express();
const port = 3000;
const server = app.listen(port, () => {
    console.log("Server started on port "+ port);
});
const io = require('socket.io')(server);

// Connect to Database (mongoose)
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () =>{
console.log('Connected to database through mongoose on '+config.database);
});

// On error
mongoose.connection.on('error', (err) =>{
console.log('Database error: '+err);
});

const users = require('./routes/users');
const chats = require('./routes/chats');

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//SocketIO initialization
// Chat message sockets
io.on("connection", (socket) => {
    socket.on('send-message', (data) => {
        io.emit('message-received',data);
    });
});
//User typing socket
io.on("connection", (socket) => {
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing-complete', (data));
    });
});
//User typing socket kill the broadcast
io.on("connection", (socket) => {
    socket.on('kill-typing', (data) => {
        socket.broadcast.emit('typing-killed', (data));
    });
});

// Body Parser Middleware
app.use(bodyParser.json());

// Passport MW
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/chats',chats);

// Index Route
app.get('/', (req, res) => {
    res.send('invalid endpoint')
});

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

