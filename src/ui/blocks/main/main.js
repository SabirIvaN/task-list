import * as Render from '../../../lib/render.js';       // Importing a Component Render Function
import main from './main.css' assert { type: 'css' };   // Import styles for a component

document.adoptedStyleSheets.push(main);                 // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(main);               // Adding styles to shadow root

// Render the component
Render.make('main', {
    parent: document.querySelector('.app'),
    attr: { class: 'app-main' }
});
