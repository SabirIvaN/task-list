import * as Render from "../../../../lib/render.js";

Render.make("button", {
    parent: document.querySelector(".app__header"),
    append: "Создать задачу",
    attr: { class: "button button--creation" }
});