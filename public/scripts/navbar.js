console.log("this is the navbar.js file in the './public/scripts' directory")
// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
