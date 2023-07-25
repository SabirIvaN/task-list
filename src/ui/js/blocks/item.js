import { tasks } from "../../../services/reading.js";
import * as Render from "../../../lib/render.js";

tasks.forEach(item => {
    Render.make("li", {
        append: [
            ["h2", {
                append: item.title,
                attr: { class: "item-title" }
            }],
            ["input", {
                attr: {
                    type: "checkbox",
                    id: "checkbox-" + item.id,
                    class: "field-checkbox"
                }
            }],
            ["label", {
                attr: {
                    for: "checkbox-" + item.id,
                    class: "field-label"
                }
            }],
            ["button", {
                append: "Удалить задачу",
                attr: {
                    class: "button-removal"
                }
            }]
        ],
        parent: document.querySelector(".list"),
        attr: { class: "list-item" }
    });
});

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completion === true) {
        document.getElementById("checkbox-" + tasks[i].id).checked = true;
    } else {
        document.getElementById("checkbox-" + tasks[i].id).checked = false;
    }
}
