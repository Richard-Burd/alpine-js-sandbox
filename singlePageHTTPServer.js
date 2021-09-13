// This server will serve up the index.html page and ONLY that single page
// it will work with Alpine.js
// This server will be deactivated in a future version once the router is setup


// Node JS Tutorial for Beginners #17 - Serving HTML Pages
// https://www.youtube.com/watch?v=BBOUfdUZIVo

let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(__dirname + '/single-page-app.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
