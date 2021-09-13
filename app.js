// Node.js Crash Course Tutorial #6 - Express Apps
// https://youtu.be/Lr9WUkeYSA8

const express = require('express');

// express app
const app = express();

// listen for Requests
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/images', (req, res) => {
  res.sendFile('./views/images.html', { root: __dirname});
});

app.get('/accordion', (req, res) => {
  res.sendFile('./views/accordion.html', { root: __dirname});
});

// import css & image files
// https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs
app.use(express.static(__dirname + '/public'));
