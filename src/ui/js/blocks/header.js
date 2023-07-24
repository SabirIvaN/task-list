import * as Render from "../../../lib/render.js";

Render.make("header", {
    parent: document.querySelector(".app"),
    attr: { class: "app__header" },
    append: [
        ["input", {
            parent: document.querySelector(".app__header"),
            attr: {
                class: "field field--text",
                type: "text",
                placeholder: "Введите Вашу задачу..."
            }
        }],
        ["button", {
            parent: document.querySelector(".app__header"),
            append: "Создать задачу",
            attr: { class: "button button--creation" }
        }]
    ]
});