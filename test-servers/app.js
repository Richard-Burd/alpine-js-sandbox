const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.listen(3000);

const directoryPath = path.join(__dirname, 'views');

// empty array to be populated with routes in the ./views directory
let dynamicUrls = []

// based on code similiar to this:
// https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5
// the purpose of this function is to create an array dynamically by reading the contents of
// the "./views" directory and populating those contents into the 'dynamicUrls' array above
fs.readdir(directoryPath, function (err, files) {
  myArray = []

  // error message if the directory doesn't exist
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } else {
    files.forEach(function (file) {
      // we do not want to create routes for these two files in the "./views" directory
      if (!file.includes("404") && !file.includes("index")) {
        console.log(`I can only console.log this file: ${file}`);

        // This is working as it should, the myArray inside this function is populated
        // with a string of each file in the "./views" folder, and the dile extensions
        // are taken off the string before it is pushed into the 'myArray'
        myArray.push(`/${file.substr(0, file.lastIndexOf('.')) || file}`);
      };
    });
  }

  // this works as it should; the 'myArray' array in this function has been properly populated by the
  // "files.forEach(function (file)" body above
  console.log(`myArray values are: ${myArray} ... but I can't get them out of this function`);

  // this doesn't work, even w/ "fs.readdirSync" replacing the "fs.readdir"
  dynamicUrls.push("can't push anything to this array from inside this function")

  // if I could just reset the value of dynamicUrls like this, it would match the staticUrls array below,
  // NOTE: this is all I need to make this server work the way I want it to (for now at least)
  dynamicUrls = myArray
})

// new URL's must be added to this array manually for now, until the above code is working properly
// eventually this 'urls' array will be replaced with the 'dynamicUrls' array above
let staticUrls = [
  '/about',
  '/images',
  '/accordion'
];

// eventually the 'staticUrls' array below will be replaced with the 'dynamicUrls' array once the
// "fs.readdir" function above is working properly
staticUrls.forEach(function(name) {
  app.get(name, function(req, res) {
    res.sendFile(`./views/${name}.html`, { root: __dirname});
  });
});

// the homepage URL has unique naming so it is not dynamically rendered like the other URL's
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname});
});

app.use(express.static(__dirname + '/public'));

// this is working correctly, so this 'urls' array is fed into the function above
// in order to dynamically create 'get' requests
console.log("staticUrls array is populated with the following:")
console.log(staticUrls) //=> [ '/about', '/images', '/accordion' ]

console.log(" ")

// this is not working correctly, so I cannot feed it into the function above
// in order to dynamically create 'get' requests
console.log("dynamicUrls array is populated with the following:") // this is not working
console.log(dynamicUrls) //=> []

console.log(" ")
