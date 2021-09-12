////////////////////////////////////////////////////////////////////////////////
// Node JS Tutorial for Beginners #17 - Serving HTML Pages
// https://www.youtube.com/watch?v=BBOUfdUZIVo

let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
////////////////////////////////////////////////////////////////////////////////

// // Node.js Crash Course Tutorial #4 - Requests & Responses
// // https://youtu.be/DQD00NAUPNk
// const http = require('http');
//
// const server = http.createServer((req, res) => {
//   console.log('request made');
// })
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
