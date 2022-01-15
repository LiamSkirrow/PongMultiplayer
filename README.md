# PongMultiplayer
Classic multiplayer pong game in the browser

## Stack
- Node/Express/Socket.io
- A package bundler is needed! Will probably use webpack. A bundler is necessary since 'require()' is not valid client-side JS syntax in the browser, so there needs to be a way to lump all the code that's used/referred to and bundle it all into one big file, to be included in the index.html file. This allows node modules to be run on the client side -> socket.io can be used in the browser to communicate with the server.

### TODO
- 