import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pagination-component',
  shadow: true,
})
export class PaginationComponent {
  @Prop() pages: number;
  @Prop() currentPage: number;
  @Prop() goToPreviousPage: any;
  @Prop() goToNextPage: any;
  @Prop() getPaginationGroup: any;
  @Prop() changePage: any;

  render() {
    return (
      <div>
        {this.currentPage !== 1 ? <button onClick={() => this.goToPreviousPage(this.currentPage)}>prev</button> : null}{' '}
        {this.getPaginationGroup().map((item: string) => {
          return (
            <button onClick={() => this.changePage(item)}>
              <span>{item}</span>
            </button>
          );
        })}
        {this.currentPage !== this.pages ? <button onClick={() => this.goToNextPage(this.currentPage)}>next</button> : null}
      </div>
    );
  }
}
