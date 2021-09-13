# alpine-js-sandbox
A place for me to screw around with and learn how to use Alpine.js

### Requirements:

Node.js, NVM, and NPM are required

### Installation instructions (Ubuntu):

1. run: `npm install` to install the alpine.js and express.js node modules
2. run: `npm spa` to boot up the `singlePageHTTPServer.js` which will give you a simple, single page application
3. or run: `node server` to boot up the server inside the `server.js` file and use Node's native routing without express.js
4. or run: `node app` to boot up the server inside the `app.js` file which runs express.js

You should then be able to see the index.html file that looks like this:

![](https://i.imgur.com/gJhua2i.jpg)

### This Node.js application should be able to do the following:

- [x] A Node.js server can read and display an index.html file
- [x] The index.html file contains working Alpine.js components
- [x] A GitHub repo is established for the application
- [x] The index.html has a link to an about.html page
- [x] The about.html page has a link to the index.html page
- [ ] The info.html page has an animated accordion button
- [ ] The app can display images embedded in an app directory
- [ ] The app can display images from a remote location like imgur.com
- [ ] The about.html page can iterate on a JSON file and display data
- [x] The .html files can read a .css file and interpret it
- [ ] An .html file can read a .js file and execute it properly
- [ ] The .css file detects a user's media and gracefully degredates text
- [ ] The .css file detects a user's media and gracefully degredates an image
- [ ] A navbar component appears on all html pages in the app
- [ ] The navbar has three .html files listed and properly navigates to them
