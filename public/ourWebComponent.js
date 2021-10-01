// This is a web component.
// Alpine.js doesn't give us reusuable components, so we need web components for that
// https://youtu.be/PCWaFLy3VUo

// we need to create the template above the class
const template = document.createElement('template');

// here we define the template using HTML and (embedded) CSS
template.innerHTML = `
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <style>
    /* Tailwind-CSS cannot style web components, so we will style them here */
    /* https://dev.to/43081j/using-tailwind-at-run-time-with-web-components-47c */
    /* this styling will not effect elements on the DOM outside of this component */
    .custom-web-component {
      background-color: rgba(255, 255, 255, 0.3);
    }

    h3 {
      color: rgb(85, 122, 159);
    }

    h3:hover {
      color: black;
      transition: 1s;
    }
  </style>
  <div class='custom-web-component'>

    <!-- this is fed the 'avatar' from the "getAttribute('avatar') line in the class below -->
    <img />

    <div>

      <!-- this is fed the 'name' from the "getAttribute('name') line in the class below -->
      <h3></h3>

      <div class="info">
        <p class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110" ><slot name="email" /></p>
        <p class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110" ><slot name="phone" /></p>
      </div>
    </div>
    <button id="toggle-info">Click me to hide Info</button>
  </div>
`

class ACoolWebComponent extends HTMLElement {
  constructor() {
    super();

    // this property sets the button to "show-info" by default
    this.showInfo = true;

    // This is where we create the Shadow DOM
    this.attachShadow({mode: 'open'});

    // Use the shadowRoot to append the child by adding in out template above
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // sets the name attribute to the template above
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

    // sets the avatar attribute to the template above
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  // this is called by the "connectedCallback" lifecycle function below
  toggleInfo() {
    console.log("The user just pressed the button")

    // this changes the "showInfo" property (defined above in the constructor)
    // to whatever it is currently not.
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      // we set this to block because we want to display it
      info.style.display = 'block';

      // we want the button to say "hide info" because now the info is displayed
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none'; // we don't want to see the info
      toggleBtn.innerText = 'Click me to show Info'; // we want the button to revert to original text
    }
  }

  // we need an eventListener on the component's button, that will go in the
  // lifecycle method below called "connectedCallback"
  // NOTE: this goes under the constructor
  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  // this will remove the event listener inside the "connectedCallback" lifecycle function above
  disconnectedCallback(){
    this.shadowRoot.querySelector('#toggle-info').removeEventListener('click', () => this.toggleInfo());
  }

}

window.customElements.define('custom-web-component', ACoolWebComponent);
