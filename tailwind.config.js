// Here are insturctions for creating a new config file:
// https://tailwindcss.com/docs/installation#using-tailwind-cli

module.exports = {
  // this 'purge' is going through all files in the ./views directory and looking for what CSS classes are
  // actually being used vs. which ones aren't, and when this line of code runs in the package.json:
  // "build-css:prod": "NODE_ENV=production npm run build-css:dev"
  // Tailwind will see what classes aren't being used and "purge" them; this is so that when you go to
  // Google Dev tools > Network > Filter: CSS - you will see a much smaller .css file loading up vs.
  // the 5MB .css file from unpkg
  purge: ["./views/**/*.html"], // this is called "globing" (the ** recursively searches for the files)
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
