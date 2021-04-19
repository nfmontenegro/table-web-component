var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, eventOptions, } from 'lit-element';
let CustomElement = class CustomElement extends LitElement {
    constructor() {
        super(...arguments);
        this.hello = null;
        this.data = [];
        this.customMessage = '';
    }
    handleClick() {
        if (this.customMessage) {
            this.customMessage = '';
        }
        else {
            this.customMessage = `Set a new message ${this.hello}`;
        }
    }
    render() {
        return html `<h1>Hello, ${this.hello}</h1>
      <p>
        ${this.data.map((element) => html `<div>${element.body}</div>`)}
      </p>
      <button @click="${this.handleClick}">Click me!!</button>
      ${this.customMessage ? html `${this.customMessage}` : null} `;
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
__decorate([
    eventOptions({ capture: true })
], CustomElement.prototype, "handleClick", null);
CustomElement = __decorate([
    customElement('custom-element')
], CustomElement);
export { CustomElement };
//# sourceMappingURL=custom-element.js.map