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
3. If you make changes to src/styles.css, run: `npm run build-css:dev` so tailwind-css updates the public/styles.css file.
4. To create a tailwind.config file, run: `npx tailwindcss init --full` - this is if you need to customize Tailwind-CSS

### This Node.js application must be able to do the following in order for me to use Alpine.js on my upcomming projects:

- [x] The RAM logo can cascade into appearance as John described.
- [x] Each .html file includes the internal & external <script> & <link> tags so that both Ailpine.js and Tailwind-CSS can be used as node modules or reference the internet so that the only node module required for the workspace is Express.js
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
- [x] The app has pages styled using tailwind-css
- [x] The app can render Arial Rounded MT Bold font
- [x] The server directs a user to the 404.html page when they mis-type a URL
- [x] The server can read files & subdirectories in the `./views` folder and dynamically create all necessary `GET` requests for the application
- [x] A dropdown accordion capable of mimicing those on the UCS ./about page is working properly in an .ejs file
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
│   ├── custom-styles
│   ├── documents
│   ├── images
│   │   ├── ramlogo
│   │   │   ├── 0.jpg
│   │   │   ├── 1.jpg
│   │   │   ├── 2.jpg
│   │   │   ├── 3.jpg
│   │   │   ├── 4.jpg
│   │   │   └── 5.jpg
│   │   ├── alpinejs.jpg
│   │   ├── alpinejs.svg
│   │   ├── kardeshev.jpg
│   │   └── web-components.svg
│   ├── scripts
│   │   └── scripts.js
│   ├── tailwind-css
│   │   ├── readme.md
│   │   └── styles.css (this file is in the gitignore and does not get pushed to the production build)
│   ├── web-components
│   │   └── ourWebComponent.js
│   └── favicon.ico
├── src
│   └── styles.css (devs edit this file then run "$npm run build-css" to run Tailwind-CSS)
├── test-servers (depricated earlier versions of the server [now called: "app.js"])
├── tutorials (these have nothing to do with the project, they are Alpine.js YouTube tutorials)
├── views (the app.js server goes into this folder and serves up everything in here)
│   ├── layouts
│   │   ├── full-width.ejs
│   │   ├── ramlayout.ejs
│   │   └── sidebar.ejs (currently unused, but will be built out if we want a sidebar later)
│   ├── myfolder (used to test subdirectories, e.g.: www.awebsite.com/section/subsection/final-resource)
│   │   ├── myview.html
│   │   └── nested.ejs
│   ├── partials
│   │   ├── footer.ejs
│   │   ├── header.ejs (this is currently unused since we use the navbars)
│   │   ├── navbar.ejs
│   │   ├── pureaccordion.ejs
│   │   └── ramnavbar.ejs
│   ├── 404.html (user shoud be served this if they go to a URI that does not exist)
│   ├── about.html
│   ├── accordion.html
│   ├── illustrations.html
│   ├── index.html
│   ├── layoutandpartials.ejs
│   ├── ram.html
│   ├── ramhome.ejs
│   └── scratch.ejs (currently unused, slated for deletion)
├── .gitignore
│   ├── node_modules
│   ├── notes-to-self.txt
│   └── public/tailwind-css/styles.css
├── app.js (this is the all-important server using Express.js for routing)
├── LICENSE
├── package-lock.json
├── package.json
├── Procfile
├── README.md
└── tailwind.config.js
```
