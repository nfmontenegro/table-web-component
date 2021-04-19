import {
  LitElement,
  html,
  customElement,
  property,
  eventOptions,
} from 'lit-element';

interface Element {
  body: string;
}

@customElement('custom-element')
export class CustomElement extends LitElement {
  @property({type: String})
  hello = null;
  @property({type: Array})
  data = [];
  @property({type: String})
  customMessage = '';

  @eventOptions({capture: true})
  handleClick() {
    if (this.customMessage) {
      this.customMessage = '';
    } else {
      this.customMessage = `Set a new message ${this.hello}`;
    }
  }

  render() {
    return html`<h1>Hello, ${this.hello}</h1>
      <p>
        ${this.data.map((element: Element) => html`<div>${element.body}</div>`)}
      </p>
      <button @click="${this.handleClick}">Click me!!</button>
      ${this.customMessage ? html`${this.customMessage}` : null} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-element': CustomElement;
  }
}
