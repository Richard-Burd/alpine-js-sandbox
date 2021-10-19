// Node.js Crash Course Tutorial #6 - Express Apps
// https://youtu.be/Lr9WUkeYSA8
const express = require('express');

// https://youtu.be/lYVKbAn5Od0?t=289
const expressLayouts = require('express-ejs-layouts')

// express app is created
const app = express();

// https://stackoverflow.com/questions/15463199/how-to-set-custom-favicon-in-express
// "...No extra middlewares required. Just use:"
app.use('/favicon.ico', express.static('public/favicon.ico'));

// This is necessary in order to compile the app locally and push it to Heroku
// ...as of right now, Heroku is setup to listen to the GitHub repo and make andy changes
// https://youtu.be/MxfxiR8TVNU <= This video shows how to compile the app locally and push it to Heroku
let PORT = process.env.PORT || 3000;

// https://youtu.be/SccSCuHhOw0?t=374
// this is a route specifically to download a file
app.get('/my-custom-download', (req, res) => {
  res.download('./public/images/alpinejs.jpg');
});

// listen for Requests
app.listen(PORT);

// this gives the .html files access to the .jpg, .svg, .js & .css files in the public folder
app.use(express.static("public"));

// Set the templating engine
// https://youtu.be/lYVKbAn5Od0?t=248
app.use(expressLayouts)

// https://youtu.be/lYVKbAn5Od0?t=587
app.set('layout', './layouts/full-width')

app.set('view engine', 'ejs')

// NOTE: We want to get rid of this and get the .ejs files to render statically like the .html files already do
app.get('/layoutandpartials', (req, res) => {
  res.render('layoutandpartials.ejs')
});
// NOTE: We want to get rid of this too, be we also want to have nested URL/URI's in our website
app.get('/myfolder/nested', (req, res) => {
  res.render('myfolder/nested.ejs')
});

// https://stackoverflow.com/questions/16534545/how-to-get-rid-of-html-extension-when-serving-webpages-with-node-js
// https://youtu.be/SccSCuHhOw0?t=1735
app.use(express.static("views", {
    extensions: ['html', 'htm', 'ejs'], // strips out these file extensions in the URI / URL
}));

// https://www.codegrepper.com/code-examples/javascript/how+to+make+a+404+page+nodejs
// This is what happens when the user tries to go to a page that does not exist
app.use(function(req, res){
  res.status(404);
  res.sendFile('./views/404.html', { root: __dirname});
  // option to just have text display instead of an HTML page
  // res.type('txt').send("We're sorry, but we cannot seem to find that exact page");
});
