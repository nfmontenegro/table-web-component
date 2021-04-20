var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let CustomElement = class CustomElement extends LitElement {
    constructor() {
        super(...arguments);
        this.hello = null;
        this.data = [];
        this.customMessage = '';
        this.handleClick = () => {
            if (this.customMessage) {
                this.customMessage = '';
            }
            else {
                this.customMessage = `Set a new message ${this.hello}`;
            }
        };
        this.emit = () => {
            const event = new CustomEvent('custom-click', {
                detail: 'Test',
            });
            this.dispatchEvent(event);
        };
    }
    render() {
        return html `<h1>Hello, ${this.hello}</h1>

      <button @click="${this.handleClick}">Click me!!</button>
      <button @click="${this.emit}">Click me function!!</button>
      <p>
        ${this.data.length > 0
            ? this.data.map((element) => html `<div>${element.body}</div>`)
            : 'Loading...'}
      </p>

      ${this.customMessage ? html `${this.customMessage}` : null}`;
    }
};
__decorate([
    property({ type: String })
], CustomElement.prototype, "hello", void 0);
__decorate([
    property({ type: Array })
], CustomElement.prototype, "data", void 0);
__decorate([
    property({ type: String })
], CustomElement.prototype, "customMessage", void 0);
CustomElement = __decorate([
    customElement('custom-element')
], CustomElement);
export { CustomElement };
//# sourceMappingURL=custom-element.js.map