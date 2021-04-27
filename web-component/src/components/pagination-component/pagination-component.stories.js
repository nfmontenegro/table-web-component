import { storiesOf } from '@storybook/html';
import notes from './readme.md';

function invokeChangePage() {
  console.log('Change page');
}
function invokeGoToNextPage() {
  console.log('Go to next page');
}
function invokeGoToPreviousPage() {
  console.log('Go to previous page');
}

storiesOf('Pagination Component', module)
  .add(
    'One page',
    () => {
      setTimeout(() => {
        const component = document.querySelector('pagination-component');
        component.changePage = invokeChangePage;
        component.getPaginationGroup = () => ['1'];
        component.goToNextPage = invokeGoToNextPage;
        component.goToPreviousPage = invokeGoToPreviousPage;
      });
      return `<pagination-component current-page="1" pages="1">`;
    },
    { notes },
  )
  .add(
    'Many pages',
    () => {
      setTimeout(() => {
        const component = document.querySelector('pagination-component');
        component.changePage = invokeChangePage;
        component.getPaginationGroup = () => ['1', '2', '3', '4', '5'];
        component.goToNextPage = invokeGoToNextPage;
        component.goToPreviousPage = invokeGoToPreviousPage;
      });

      return `<pagination-component current-page="2" pages="5">`;
    },
    { notes },
  );
