import { LitElement, html, customElement, property } from "lit-element";

interface Element {
  body: string;
}

@customElement("custom-element")
export class CustomElement extends LitElement {
  @property({ type: String }) hello = null;
  @property({ type: Array }) data = [];
  @property({ type: String }) customMessage = "";

  private handleClick = () => {
    if (this.customMessage) {
      this.customMessage = "";
    } else {
      this.customMessage = `  ${this.hello}`;
    }
  };

  private emit = () => {
    const event = new CustomEvent("custom-click", {
      detail: "Test",
    });
    this.dispatchEvent(event);
  };

  render() {
    return html`<h1>Hello, ${this.hello}</h1>

      <button @click="${this.handleClick}">Click me!!</button>
      <button @click="${this.emit}">Click me function!!</button>
      <p>
        ${this.data.length > 0
          ? this.data.map(
              (element: Element) => html`<div>${element.body}</div>`
            )
          : "Loading..."}
      </p>

      ${this.customMessage ? html`${this.customMessage}` : null}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-element": CustomElement;
  }
}
