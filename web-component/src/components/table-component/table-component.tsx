import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.css',
  shadow: true,
})
export class TableComponent {
  @Prop() data: any;
  @Prop() tHeads: any[] = [];
  @Prop() invokeCallback: any;
  @Prop() currentPage: number = 1;
  @Prop() limit: number;
  @Prop() total: number;

  @State() list: any[] = [];
  @State() pages: number;

  componentDidLoad() {
    this.list = this.data;
    this.pages = this.total / this.limit;
  }

  componentDidUpdate() {
    if (this.data.length === this.list.length && this.data !== this.list) {
      this.list = this.data;
    }
  }

  renderTheads = () => {
    return this.tHeads.map((thead: string) => <th>{thead}</th>);
  };

  renderBody = () => {
    //    const startIndex = this.currentPage * this.limit - this.limit;
    //    const endIndex = startIndex + this.limit;
    //    const dataSliced = this.list.slice(startIndex, endIndex);
    const getDataFromFirstPosition = Array.isArray(this.list) && this.list.length ? this.list[0] : {};
    const getKeys = Object.keys(getDataFromFirstPosition);
    return this.list.map(value => (
      <tr>
        {getKeys.map(key => (
          <td>{value[key]}</td>
        ))}
      </tr>
    ));
  };

  updateList = (input: string = '') => {
    const getDataFromFirstPosition = Array.isArray(this.list) && this.list.length ? this.list[0] : {};
    const getKeys = Object.keys(getDataFromFirstPosition);
    const filtered = this.data
      .map(elem => {
        for (const key of getKeys) {
          const hasMatch = elem[key].toLowerCase().includes(input.toLowerCase());
          if (hasMatch) {
            return elem;
          }
        }
      })
      .filter(values => values);

    this.list = [...filtered];
  };

  goToPreviousPage = (currentPage: number) => {
    this.currentPage = currentPage - 1;
    this.invokeCallback(this.currentPage);
  };

  goToNextPage = async (currentPage: number) => {
    this.currentPage = currentPage + 1;
    this.invokeCallback(this.currentPage);
  };

  getPaginationGroup = () => {
    return new Array(this.pages).fill(null).map((_, index) => index + 1);
  };

  changePage = (numberPage: number) => {
    this.currentPage = numberPage;
    this.invokeCallback(this.currentPage);
  };

  setDefaultData = () => {
    this.list = this.data;
  };

  render() {
    return (
      <div>
        {this.data.length > 0 ? (
          <div>
            <search-component updateList={this.updateList} setDefaultData={this.setDefaultData} />
            <table>
              <tr>{this.renderTheads()}</tr>
              {this.renderBody()}
            </table>
            <pagination-component
              pages={this.pages}
              goToPreviousPage={this.goToPreviousPage}
              currentPage={this.currentPage}
              getPaginationGroup={this.getPaginationGroup}
              changePage={this.changePage}
              goToNextPage={this.goToNextPage}
            />
            <h1>Current page: {this.currentPage}</h1>{' '}
          </div>
        ) : (
          'Loading ...'
        )}
      </div>
    );
  }
}
