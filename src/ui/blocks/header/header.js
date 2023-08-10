import * as Render from '../../../lib/render.js';               // Importing a Component Render Function
import { creation } from '../../../application/creation.js';    // Import function to create a Task
import style from './header.css' assert { type: 'css' };        // Import styles for a component

document.adoptedStyleSheets.push(style);                        // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(style);                      // Adding styles to shadow root

// Render the component
Render.make('header', {
    parent: document.querySelector('.app'),
    attr: { class: 'app-header' },
    append: [
        ['input', {
            parent: document.querySelector('.app-header'),
            attr: {
                id: 'task-title',
                class: 'field-text',
                type: 'text',
                placeholder: 'Введите Вашу задачу...'
            }
        }],
        ['button', {
            parent: document.querySelector('.app-header'),
            append: 'Создать задачу',
            attr: { 
                class: 'button-creation',
                onclick: () => creation()
            }
        }]
    ]
});
