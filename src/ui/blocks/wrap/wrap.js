import * as Render from "../../../lib/render.js";
import wrap from './wrap.css' assert { type: 'css' };

document.adoptedStyleSheets = [wrap];
ShadowRoot.adoptedStyleSheets = [wrap];

Render.make("div", {
    parent: document.body,
    attr: { class: "wrap" }
});
