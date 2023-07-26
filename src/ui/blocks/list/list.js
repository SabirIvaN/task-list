import * as Render from "../../../lib/render.js";
import list from './list.css' assert { type: 'css' };

document.adoptedStyleSheets.push(list);
ShadowRoot.adoptedStyleSheets.push(list);

Render.make("ul", {
    parent: document.querySelector(".app-main"),
    attr: { class: "list" }
});
