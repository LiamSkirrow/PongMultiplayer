//server side JS code, initialise a server object and listen on port 5500

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

//allows the CSS to work properly
app.use(express.static(__dirname + '/'));

//respond to a GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
  console.log(socket.id + ' has connected!');
  socket.on('msg', (msg) => {
    console.log(msg);
  });
});

httpServer.listen(3000);
