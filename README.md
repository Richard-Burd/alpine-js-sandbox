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
- [x] A web component can be put into an Alpine.js component like [this](https://codepen.io/James0r/pen/vYZBrRj)
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
## Urban Cruise Ship Website Documentation
This section describes the Urban Cruise Ship (UCS) website architecture.  &nbsp;The UCS website uses the following plugins:
1. **Node.js** - runtime environment
2. **Express.js** - node module for routing of different paths & resources in the URI
3. **Tailwind-CSS** - node module/CDN for styling

In the future, Alpine.js may be added to the list but it is not used at the moment.
<br><br><br>
#### Installation instructions (Ubuntu):
1. run: `$npm install` to install the node modules.
2. run: `$npm start` to boot up the application

### Getting Started
Tailwind CSS is implemented so that it automatically updates every time the server is booted up with the  `npm start` command.&nbsp;  In the future you can add custom styling to the file located at `./src/styles.css` and those stylings will be automatically compiled to `./public/tailwind-css/styles.css` whenever you boot up the server.

![an image of the package.json file](https://i.imgur.com/AhOAhzy.png)

Currently, we are compiling the code in this repository and then copy/pasting it directly to the existing UCS website build; this means we must use the following CDN link for Tailwind-CSS that effectively allows us to ignore the two `.css` files mentioned above:

`<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`

This link loads the **entire** Tailwind-CSS library and results in slower loading times, thus, when we use this repository (or another one like it) directly for the UCS website (instead of copy/pasting directly to the existing UCS website build) we will delete the link and use this link instead:

`<link rel="stylesheet" type="text/css" href="./tailwind-css/styles.css">`

NOTE: this file is not in this repository since it is in the `.gitignore` file; but it is generated upon entering `$npm start` into the terminal as described above.

Below is a schematic of the server and some of its basic functionality:

![a schematic of the server and some of its basic functionality](https://i.imgur.com/vKaAwdO.png)

The important takeaway here is that each time we create a new page on the UCS website, we will need to create a new `app.get()` request for that page in the `./app.js` file.&nbsp;  In example, if you were to create a *contact* page at the following URL:
`http://urbancruiseship.org/contact`
...you would need to enter a new line of code in `./app.js` that looks like this:
```javascript
app.get('/contact', (req, res) => {
  res.render('ucs-contact.ejs', {layout: './layouts/ucslayout'});
});
```
Below we have a schematic showing the relationship between bodies, layouts, and partials:
![a schematic showing the relationship between bodies, layouts, and partials](https://i.imgur.com/LaeDbbA.png)

Note that the `ucs-navbar.ejs` and body files such as `ucs.ejs` (the homepage) and `ucs-about.ejs` (the ./about page) both have significant amounts of css styling on them; this is because such stylings would normally go on the file located at:
 `./src/styles.css`
 ... and then get compiled to the file located at:
 `./public/tailwind-css/styles.css`
 ... each time you boot the server with `$npm start`.&nbsp;  But since we are copy/pasting compiled HTML from this workspace to the existing UCS website build, that workflow will not work properly.&nbsp;  This is because, when using Tailwind-CSS, you cannot have *other* external css files besides the two mentioned above, or Tailwind will break.&nbsp;  Therefore, for simplicity purposes, we are putting non-Tailwind-css styling directly onto the `.ejs` files for now.&nbsp;  Once we are using this repository to serve content directly to http://urbancruiseship.org, we may remove all of the css styling from the `.ejs` files and put that styling [here](https://github.com/Richard-Burd/alpine-js-sandbox/blob/main/src/styles.css) in the proper location at: `"./src/styles.css"`

Below we have a schematic wiring diagram showing how the `"./about"` page works:

![a schematic wiring diagram showing the relations between layouts, partials, alpine.js, and ejs](https://i.imgur.com/MI1HgV4.jpg)

This diagram shows the use & integration of [Alpine.js](https://alpinejs.dev/) in the lower left-hand corner, where it is highlighted in blue.&nbsp;  The [Embedded JavaScript templating (ejs)](https://ejs.co/) is highlighted in neon green in the same lower left-hand corner.&nbsp;  Also note the use of the [Alpine.js](https://alpinejs.dev/) core framework along with the [Collapse plugin](https://alpinejs.dev/plugins/collapse) specified [here](https://github.com/Richard-Burd/alpine-js-sandbox/blob/main/views/layouts/ucslayout.ejs) in the layout file at: `./views/layouts/ucslayout.ejs` with the following code:
```html
<!-- Alpine Plugins https://alpinejs.dev/plugins/collapse -->
<script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

This is what enables the buttons on the `./about` page to drop down (and scroll up) whenever they are clicked since the Alpine.js core doesn't have this feature.&nbsp;  These buttons are modeled on the [green button here on the test site](https://burd-test-1.herokuapp.com/layoutandpartials) named ***Special Alpine.js Animated Dropdown Button (Mouse-Click)*** - the orange-yellow button above it named ***Another Alpine.js Component Button*** is the default button in Alpine.js and it has an entirely different animation.&nbsp;
