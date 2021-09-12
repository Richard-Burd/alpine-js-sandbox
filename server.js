// Node.js Crash Course Tutorial #4 - Requests & Responses
// https://youtu.be/DQD00NAUPNk

// fire this up in bash with the following command:
// richardburd@ubuntu:~/Desktop/dev/alpine-js-sandbox(main)$node server

const http = require('http');

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

})

// This produces an error in the browser console:
// VM45:7274 crbug/1173575, non-JS module files deprecated.
// server.listen(3000, '127.0.0.1');

// ...using localhost instead of address:
server.listen(3000, 'localhost');
console.log('now listening to port 3000');
