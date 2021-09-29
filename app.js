// Node.js Crash Course Tutorial #6 - Express Apps
// https://youtu.be/Lr9WUkeYSA8
const express = require('express');

// express app
const app = express();

// icon in the browser tab
app.use('/favicon.ico', express.static('public/favicon.ico'));

// these are used to grab filenames out of the './views' directory
const fs = require('fs');
const fileNames = fs.readdirSync('views');
// an array for storing files & subdirectories in the './views' directory
// currently, there is no way to use this if the project has subdirectories
// such as './views/myfolder/myfile.html' - this will not work
// if all files in the './views' directory are just .html files, then the
// "urls" array below could be replaced with this 'dynamicUrls' array so the
// developer simply adds a nedw .html file to the project, and each time the app.js
// is ran, the dynamicUrls array will be updated with the newly created .html files
let dynamicUrls = [] //.......................................currently not used
fileNames.forEach(element => dynamicUrls.push(element));//....currently not used
const indexIndex = dynamicUrls.indexOf("index.html")//........currently not used
dynamicUrls.splice(indexIndex, 1)//...........................currently not used
const fourIndex = dynamicUrls.indexOf("404.html")//...........currently not used
dynamicUrls.splice(fourIndex, 1)//............................currently not used

// NOTE: currently, there is no way to reach the 404.html view if the user types in
// an incorrect URL; this is the second thing that needs to be added to this server
// after implementation of the dynamic URL's

// new URL's must be added to this array until the dynamicUrls array abvoe is working:
let urls = [
  '/about',
  '/images',
  '/accordion',
  '/myfolder/myview',
  '/illustrations'
];

urls.forEach(function(name) {
  app.get(name, function(req, res) {
    res.sendFile(`./views/${name}.html`, { root: __dirname});
  });
});

// the index.html file is unique, so it has its own get request
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname});
});

// listen for Requests
app.listen(3000);

// this gives the .html files access to the .js & .css files in the public folder
app.use(express.static(__dirname + '/public'));
