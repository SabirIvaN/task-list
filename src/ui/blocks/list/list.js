import * as Render from '../../../lib/render.js';       // Importing a Component Render Function
import list from './list.css' assert { type: 'css' };   // Import styles for a component

document.adoptedStyleSheets.push(list);                 // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(list);               // Adding styles to shadow root

// Render the component
Render.make('ul', {
    parent: document.querySelector('.app-main'),
    attr: { class: 'list' }
});
