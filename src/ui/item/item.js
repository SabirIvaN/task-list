import * as Render from '../../lib/render.js';                      // Importing a Component Render Function
import { completion } from '../../application/completion.js';       // Import functions for complete and resume Tasks
import { removal } from '../../application/removal.js';             // Import feature to remove Tasks
import style from './item.css' assert { type: 'css' };              // Import styles for a component

document.adoptedStyleSheets.push(style);                            // Adding styles to the document
ShadowRoot.adoptedStyleSheets.push(style);                          // Adding styles to shadow root

let tasks = window.localStorage.getItem('tasks');                   // Getting an array of tasks from local storage

// Render components if task array is not empty
if (tasks !== null) {

    tasks = JSON.parse(tasks);

    for (let i = 0; i < tasks.length; i++) {
        Render.make('li', {
            append: [
                ['h2', {
                    append: tasks[i].title,
                    attr: { class: 'item-title' }
                }],
                ['input', {
                    attr: {
                        type: 'checkbox',
                        id: 'checkbox-' + i,
                        class: 'field-checkbox'
                    }
                }],
                ['label', {
                    attr: {
                        for: 'checkbox-' + i,
                        class: 'field-label',
                        onclick: () => completion(i)
                    }
                }],
                ['button', {
                    append: 'Удалить задачу',
                    attr: {
                        class: 'button-removal',
                        onclick: () => removal(i)
                    },
                }]
            ],
            parent: document.querySelector('.list'),
            attr: { class: 'list-item' }
        });
        
        if (tasks[i].completion === true) document.getElementById('checkbox-' + i).checked = true;
        else document.getElementById('checkbox-' + i).checked = false;
    }
}
