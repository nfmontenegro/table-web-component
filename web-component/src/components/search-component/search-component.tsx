import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'search-component',
  shadow: true,
})
export class SearchComponent {
  @Prop() updateList: any;
  @Prop() setDefaultData: any;
  @State() input: string;

  handleChange = event => {
    const value = event.target.value;
    if (value.length === 0) {
      this.setDefaultData();
    }
    this.input = event.target.value;
  };

  handleSubmit = () => {
    this.updateList(this.input);
  };

  render() {
    return (
      <div>
        Barrita que busca:
        <input onInput={this.handleChange} />
        <button onClick={this.handleSubmit}>Buscar</button>
      </div>
    );
  }
}
