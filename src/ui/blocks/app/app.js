import * as Render from "../../../lib/render.js";
import app from './app.css' assert { type: 'css' };

document.adoptedStyleSheets.push(app);
ShadowRoot.adoptedStyleSheets.push(app);

Render.make("div", {
    parent: document.querySelector(".wrap"),
    attr: { class: "app" }
});
