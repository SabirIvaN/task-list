import * as Render from "../../../lib/render.js";
import { creation } from "../../../services/creation.js";

Render.make("header", {
    parent: document.querySelector(".app"),
    attr: { class: "app__header" },
    append: [
        ["input", {
            parent: document.querySelector(".app__header"),
            attr: {
                id: "task-title",
                class: "field field--text",
                type: "text",
                placeholder: "Введите Вашу задачу..."
            }
        }],
        ["button", {
            parent: document.querySelector(".app__header"),
            append: "Создать задачу",
            attr: { 
                class: "button button--creation",
                onclick: () => creation()
            }
        }]
    ]
});