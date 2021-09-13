// fire this up in bash with the following command:
// richardburd@ubuntu:~/Desktop/dev/alpine-js-sandbox(main)$node test-servers/vanillaNodeServer

// NOTE: this file has been depricated with the installation of Express.js
// now use app.js (instead of this file's server) by running this command:
// richardburd@ubuntu:~/Desktop/dev/alpine-js-sandbox(main)$node app


// Node.js Crash Course Tutorial #4 - Requests & Responses
// https://youtu.be/DQD00NAUPNk

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  // set header content type to HTML
  res.setHeader('Content-Type', 'text/html')

  // Basic routing
  // https://youtu.be/DQD00NAUPNk?t=779
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  // here we send data back to the browser:
  // https://youtu.be/DQD00NAUPNk?t=551
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
})

// This produces an error in the browser console:
// VM45:7274 crbug/1173575, non-JS module files deprecated.
// server.listen(3000, '127.0.0.1');

// ...using localhost instead of address:
server.listen(3000, 'localhost');
console.log('now listening to port 3000');
