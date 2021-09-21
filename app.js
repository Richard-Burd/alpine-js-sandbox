const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.listen(3000);

const directoryPath = path.join(__dirname, 'views');

// the index URL is unique and has its own get request
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname});
});


// empty array to be populated with routes in the ./views directory
let dynamicUrls = []

// based on code similiar to this:
// https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5
// the purpose of this function is to create an array dynamically be reading the contents of
// the ./views directory and populating those contents into the dynamicUrls array above
fs.readdir(directoryPath, function (err, files) {
  myArray = []

  // error message if the directory doesn't exist
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } else {
    files.forEach(function (file) {
      if (!file.includes("404") && !file.includes("index")) {
        console.log(`I can only console.log this file: ${file}`);
        myArray.push(`/${file.substr(0, file.lastIndexOf('.')) || file}`);
      };
    });
  }
  console.log(`myArray values are: ${myArray} ... but I can't get them out of this function`);
  dynamicUrls.push("can't push anything to this array") // this doesn't work, even w/ "fs.readdirSync"
  dynamicUrls = myArray // if I could just reset the value of dynamicUrls like this, it would match the urls array below
})

// new URL's must be added to this array manually for now, until the above code is working properly
// eventually this 'urls' array will be replaced with the 'dynamicUrls' array above
let urls = [
  '/about',
  '/images',
  '/accordion'
];

// eventually the 'urls' array below will be replaced with the 'dynamicUrls 'array
urls.forEach(function(name) {
  app.get(name, function(req, res) {
    res.sendFile(`./views/${name}.html`, { root: __dirname});
  });
});

app.use(express.static(__dirname + '/public'));

// some console logs to see what is going on
console.log("urls array is populated with the following:")
console.log(urls)

console.log(" ")

console.log("dynamicUrls array is populated with the following:")
console.log(dynamicUrls)

console.log(" ")
