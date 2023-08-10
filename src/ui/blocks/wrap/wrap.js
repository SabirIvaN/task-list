import * as Render from '../../../lib/render.js';       // Importing a Component Render Function
import style from './wrap.css' assert { type: 'css' };  // Import styles for a component

document.adoptedStyleSheets = [style];                  // Creating an array of styles and adding them to the document
ShadowRoot.adoptedStyleSheets = [style];                // Creating an array of styles and adding them to the shadow root

// Render the component
Render.make('div', {
    parent: document.body,
    attr: { class: 'wrap' }
});
