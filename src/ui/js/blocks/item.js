import * as Render from "../../../lib/render.js";
import { click } from "../../../application/click.js";
import { removal } from "../../../application/removal.js";

let tasks = window.localStorage.getItem("tasks");

if (!(tasks === null)) {
    tasks = JSON.parse(tasks);

    for (let i = 0; i < tasks.length; i++) {
        Render.make("li", {
            append: [
                ["h2", {
                    append: tasks[i].title,
                    attr: { class: "item-title" }
                }],
                ["input", {
                    attr: {
                        type: "checkbox",
                        id: "checkbox-" + i,
                        class: "field-checkbox"
                    }
                }],
                ["label", {
                    attr: {
                        for: "checkbox-" + i,
                        class: "field-label",
                        onclick: () => click(i)
                    }
                }],
                ["button", {
                    append: "Удалить задачу",
                    attr: {
                        class: "button-removal",
                        onclick: () => removal(i)
                    },
                }]
            ],
            parent: document.querySelector(".list"),
            attr: { class: "list-item" }
        });
    }
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completion === true) document.getElementById("checkbox-" + i).checked = true;
        else document.getElementById("checkbox-" + i).checked = false;
    }
}
