import { LitElement } from 'lit-element';
export declare class CustomElement extends LitElement {
    hello: null;
    data: never[];
    customMessage: string;
    private handleClick;
    private emit;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'custom-element': CustomElement;
    }
}
//# sourceMappingURL=custom-element.d.ts.map