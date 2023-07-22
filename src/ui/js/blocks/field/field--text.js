import * as Render from "../../../../lib/render.js";

Render.make("input", {
    parent: document.querySelector(".app__header"),
    attr: {
        class: "field field--text",
        type: "text",
        placeholder: "Введите Вашу задачу..."
    }
});
