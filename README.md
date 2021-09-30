# alpine-js-sandbox
I am planning to use Alpine.js to build out two new static sites but before I do that, I want to make sure I can do everything I need to do for those projects, so I will build out that functionality here, seperate from the projects.

### Requirements:

Node.js, NVM, and NPM are required

### Installation instructions (Ubuntu):

1. run: `npm install` to install the alpine.js and express.js node modules
2. run: `npm start` to boot up the application
3. If you make changes to src/styles.css, run: `npm run build-css` so tailwind-css updates the public/styles.css file.
4. To create a tailwind.config file, run: `npx tailwindcss init --full` - this is if you need to customize Tailwind-CSS

You should then be able to see the index.html file that looks like this:

[
![image of the app's homepage](https://i.imgur.com/kT58nm3.jpg)
](https://burd-test-1.herokuapp.com)

The app is deployed [here](https://burd-test-1.herokuapp.com) on Heroku.

### This Node.js application must be able to do the following in order for me to use Alpine.js on my upcomming projects:

- [ ] The bug with './images.html' is fixed so that web components display on it properly (or the problem with this file's naming convention is discovered) - './illustrations.html' is an exact copy that works just fine; the current theory is that there cannot be a file in the './public' directory that has the same name as a folder in the './views' directory because the app.js (router) file runs the `app.use(express.static(__dirname + '/public'));` line and this may create an `images` reference overlap.
- [ ] Each .html file includes the internal & external <script> & <link> tags so that both Ailpine.js and Tailwind-CSS can be used as node modules or reference the internet so that the only node module required for the workspace is Express.js
- [x] The app has a reusable navbar component using Web Components or another means
- [x] A Node.js server can read and display an index.html file
- [x] A GitHub repo is established for the application
- [x] Page navigation is working
- [x] Routing is working
- [x] The app can display both raster (jpg) and vector(svg) images
- [x] The app renders a favicon
- [x] The app's .html files are properly reading .css files
- [x] The app's .html files are properly reading .js files
- [x] An Alpine.js component can read a JavaScript file and iterate on it
- [ ] The app has pages styled using tailwind-css
- [ ] The app uses Arial Rounded MT font using tailwind-css and Google Fonts
- [ ] An dropdown accordion is animated w/tailwind-css + alpine.js transitioning
- [ ] The server directs a user to the 404.html page when they mis-type a URL
- [ ] The server can read files & subdirectories in the `./views` folder and dynamically create all necessary `GET` requests for the application
- [ ] The system used on the UCS website for managing references is implemented here
- [ ] A component can display selected references that are listed alphabetically
- [ ] An Alpine.js component can read a JSON file and iterate on it
- [ ] A Google Sheets file can be iterated on and have a JSON file of it produced
