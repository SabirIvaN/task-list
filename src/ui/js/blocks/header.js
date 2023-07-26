import * as Render from "../../../lib/render.js";
import { creation } from "../../../application/creation.js";

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