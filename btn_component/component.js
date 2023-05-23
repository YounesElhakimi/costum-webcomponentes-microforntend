const template = document.createElement("template");
template.innerHTML = `
<div style="background-color: red;height: 200px;width: 200px;justify-items: center;">
<h1>Child Component</h1>
<button id="button">Click ME</button>
</div>
`;

class MyBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener("click", this.onclick);
  }


  disconnectedCallback() {
    this.removeEventListener("click", this.onclick);
  }


  onclick() {
    const button = this.shadowRoot.getElementById("button");
    if (event.composedPath().includes(button)) {
      console.log("button clicked");
    }
  }
};
customElements.define(
  "wc-button",
  MyBtn,
);