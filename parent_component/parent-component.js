const template2 = document.createElement("template");
template2.innerHTML = `
<div style="background-color: aqua;height: 400px;width: 400px;justify-items: center;">
<h1>Parent Component</h1>
<wc-button></wc-button>
</div>
`;

class PComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template2.content.cloneNode(true));
  }

 
};
customElements.define(
  "p-component",
  PComponent,
);