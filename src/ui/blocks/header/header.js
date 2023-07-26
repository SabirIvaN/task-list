import * as Render from "../../../lib/render.js";
import { creation } from "../../../application/creation.js";
import header from './header.css' assert { type: 'css' };

document.adoptedStyleSheets.push(header);
ShadowRoot.adoptedStyleSheets.push(header);

Render.make("header", {
    parent: document.querySelector(".app"),
    attr: { class: "app-header" },
    append: [
        ["input", {
            parent: document.querySelector(".app-header"),
            attr: {
                id: "task-title",
                class: "field-text",
                type: "text",
                placeholder: "Введите Вашу задачу..."
            }
        }],
        ["button", {
            parent: document.querySelector(".app-header"),
            append: "Создать задачу",
            attr: { 
                class: "button-creation",
                onclick: () => creation()
            }
        }]
    ]
});