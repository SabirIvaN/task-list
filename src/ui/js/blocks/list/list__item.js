import { database } from "../../../../services/reading.js";
import * as Render from "../../../../lib/render.js";

database.then(item => item.default.forEach(item => {
    Render.make("li", {
        parent: document.querySelector(".list"),
        attr: { class: "list__item" }
    });
}));
