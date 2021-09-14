// currently, an Alpine.js component on the index.html (homepage) iterates on this
myArray = ["cat", "dog", "bird"]

// currently, the accordion.html page displays this
myString = "If you see this text, it's a string in the scripts.js file"

// All code below is for the accordion page
// https://www.w3schools.com/howto/howto_js_accordion.asp
let acc = document.getElementsByClassName("accordion");
let i;

window.onload = () => {
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    /* Toggle between adding and removing the "active" class,
	    to highlight the button that controls the panel */
	    this.classList.toggle("active");

	    /* Toggle between hiding and showing the active panel */
	    let panel = this.nextElementSibling;
	    if (panel.style["max-height"] === "40px") {
		  panel.style["max-height"] = "0px";
	    } else {
		  panel.style["max-height"] = "40px";
	    }
	  });
	}
}
