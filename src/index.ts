import { html, render } from "lit-html";
const root = document.createElement("div");
const app = html`
  <h1>Hello World</h1>
`;
render(app, root);
document.body.append(root);
