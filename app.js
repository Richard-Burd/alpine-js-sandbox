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

// new URL's must be added to this array:
let urls = [
  '/about',
  '/images',
  '/accordion'
];

urls.forEach(function(name) {
  app.get(name, function(req, res) {
    res.sendFile(`./views/${name}.html`, { root: __dirname});
  });
});


// This is the more literal way to get routes:

/*
app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/images', (req, res) => {
  res.sendFile('./views/images.html', { root: __dirname});
});

app.get('/accordion', (req, res) => {
  res.sendFile('./views/accordion.html', { root: __dirname});
});
*/

//************the techniques below will not work*********************


// this will not work
/*
// https://stackoverflow.com/questions/47338471/express-routing-multiple-urls-to-the-same-route
app.get(['/', '/about', '/images', '/accordion'], function(req, res, next) {
  if (!req.params.slug)
    req.params.slug = 'home'
  getData(slug, function(err, data){
    res.render('index', data)
  });
);
*/

// this will not work
/*
const routes = ['','about', 'images', 'accordion']

routes.forEach(element => app.get(`/${element}`, (req, res) => {
  res.sendFile(`./views/${element}.html`, {root: __dirname});
}));
*/

// import css & image files
// https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs

app.use(express.static(__dirname + '/public'));
