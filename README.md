# PongMultiplayer
Classic multiplayer pong game in the browser

## Info
- A package bundler is needed! A bundler is necessary since 'require()' is not valid client-side JS syntax in the browser, so there needs to be a way to lump all the code that's used/referred to and bundle it all into one big file, to be included in the index.html file. This allows node modules to be run on the client side -> socket.io can be used in the browser to communicate with the server.

## Tools Used
- Node/Express/Socket.io
- ~~Webpack~~ Browserify module bundler. Webpack is overly complicated crapware, Browserify just works with one command.

### TODO
- use google fonts to include 8 bit looking font, looks cool (check out coder coder vid https://www.youtube.com/watch?v=CdDXbvBFXLY&ab_channel=CoderCoder) 