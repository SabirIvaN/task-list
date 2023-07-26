import * as Render from "../../../lib/render.js";   // Importing a Component Render Function
import app from './app.css' assert { type: 'css' }; // Import styles for a component

document.adoptedStyleSheets.push(app);              // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(app);            // Adding styles to shadow root

// Render the component
Render.make("div", {
    parent: document.querySelector(".wrap"),
    attr: { class: "app" }
});
