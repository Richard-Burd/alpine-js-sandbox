# alpine-js-sandbox
This static site uses the following:
1. **Node.js** - runtime environment
2. **Express.js** - node module for routing of different paths & resources in the URI
3. **Tailwind-CSS** - node module/CDN for styling
4. **Alpine.js** - node module/CDN framework for implelenting JavaScript logic in HTML files
5. **Web Components** - feature for implementing reusable components (s.thing Alpine.js can't do)

### Availability

The app is deployed [here](https://burd-test-1.herokuapp.com) on Heroku.

---
### Install Requirements:

Node.js, NVM, and NPM are required

---
### Installation instructions (Ubuntu):

1. run: `npm install` to install the alpine.js and express.js node modules
2. run: `npm start` to boot up the application
3. If you make changes to src/styles.css, run: `npm run build-css` so tailwind-css updates the public/styles.css file.
4. To create a tailwind.config file, run: `npx tailwindcss init --full` - this is if you need to customize Tailwind-CSS

### This Node.js application must be able to do the following in order for me to use Alpine.js on my upcomming projects:

- [x] The RAM logo can cascade into appearance as John described.
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
- [x] The server directs a user to the 404.html page when they mis-type a URL
- [x] The server can read files & subdirectories in the `./views` folder and dynamically create all necessary `GET` requests for the application
- [ ] The system used on the UCS website for managing references is implemented here
- [ ] A component can display selected references that are listed alphabetically
- [ ] An Alpine.js component can read a JSON file and iterate on it
- [ ] A Google Sheets file can be iterated on and have a JSON file of it produced

### Nice to haves:
- [ ] A web component can be put into an Alpine.js component like [this](https://codepen.io/James0r/pen/vYZBrRj)
- [ ] An Alpine.js component can be put into a web component

## Project File Structure
```
alpine-js-sandbox
├── backend
│   ├── endeavors.json
│   └── test.json
├── public
│   ├── images
│   │   ├── alpinejs.jpg
│   │   └── alpinejs.svg
│   ├── favicon.ico
│   ├── ourWebComponent.js (this is the Web Component)
│   ├── scripts.js
│   └── styles.css (devs don't edit this, it is created by Tailwind.CSS)
├── resources (this is depricated and scheduled to be deleted)
├── src
│   └── styles.css (devs edit this file then run "$npm run build-css" to run Tailwind-CSS)
├── test-servers (depricated earlier versions of the server [now called: "app.js"])
├── tutorials (these have nothing to do with the project, they are Alpine.js YouTube tutorials)
├── views (the app.js server goes into this folder and serves up everything in here)
│   ├── myfolder
│   │   └── myview.html (this is to ensure nested .html files will be read by the server)
│   ├── 404.html (user shoud be served this if they go to a URI that does not exist)
│   ├── about.html
│   ├── accordion.html
│   ├── illustrations.html
│   └── index.html
├── app.js (this is the all-important server using Express.js for routing)
├── LICENSE
├── package-lock.json
├── package.json
├── Procfile
└── README.md
```
