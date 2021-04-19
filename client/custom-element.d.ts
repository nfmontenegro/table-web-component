import { LitElement } from 'lit-element';
export declare class CustomElement extends LitElement {
    hello: null;
    data: never[];
    customMessage: string;
    handleClick(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'custom-element': CustomElement;
    }
}
//# sourceMappingURL=custom-element.d.ts.map