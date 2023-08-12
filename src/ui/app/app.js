import * as Render from '../../lib/render.js';          // Importing a Component Render Function
import style from './app.css' assert { type: 'css' };   // Import styles for a component

document.adoptedStyleSheets.push(style);                // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(style);              // Adding styles to shadow root

// Render the component
Render.make('div', {
    parent: document.querySelector('.wrap'),
    attr: { class: 'app' }
});
