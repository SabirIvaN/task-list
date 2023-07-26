import * as Render from "../../../lib/render.js";
import main from './main.css' assert { type: 'css' };

document.adoptedStyleSheets.push(main);
ShadowRoot.adoptedStyleSheets.push(main);

Render.make("main", {
    parent: document.querySelector(".app"),
    attr: { class: "app-main" }
});