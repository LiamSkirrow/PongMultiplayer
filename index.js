//client side JS, Pong implementation can be found here

const { io } = require('socket.io-client');
console.log('Hello,  World!');

//frontend is served from the same domain as the server, no IP address necessary
const sock = io();

sock.emit('msg', "howdy server!")