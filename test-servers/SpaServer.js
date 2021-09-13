// This is the "Single Page Application" (spa) server
// Fire up this server with the following command:
// richardburd@ubuntu:~/Desktop/dev/alpine-js-sandbox(main)$node test-servers/SpaServer

// NOTE: this file has been depricated with the installation of Express.js
// now use app.js (instead of this file's server) by running this command:
// richardburd@ubuntu:~/Desktop/dev/alpine-js-sandbox(main)$node app

// This server will serve up the index.html page and ONLY that single page
// it will work with Alpine.js
// This server will be deactivated in a future version once the router is setup


// Node JS Tutorial for Beginners #17 - Serving HTML Pages
// https://www.youtube.com/watch?v=BBOUfdUZIVo

let http = require('http');
let fs = require('fs');

// because the test-servers are not in the root directory of the project,
// these two lines of code are required
let path = require('path')
let customPath = path.join(__dirname, '../')

let server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(customPath + '/views/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
console.log('this server will only serve up a single HTML page');
console.log('navigating to other pages via URI routing will not work');
