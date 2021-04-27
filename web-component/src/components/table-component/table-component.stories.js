import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Table Component', module)
  .add(
    'Default',
    () => {
      setTimeout(() => {
        const component = document.querySelector('table-component');
        component.tHeads = ['Name', 'Lastname'];
        component.data = [
          { name: 'Nicolas', lastname: 'Flores' },
          { name: 'Carolina', lastname: 'Muñoz' },
        ];
        component.total = component.data.length;
        component.invokeCallback = callbackFunction;
      });

      function callbackFunction(value) {
        console.log('Invoke callback function', value);
      }

      return `<table-component current-page="1" limit="1" />`;
    },
    { notes },
  )
  .add(
    'Loading',
    () => {
      setTimeout(() => {
        const component = document.querySelector('table-component');
        component.tHeads = [];
        component.data = [];
        component.total = 0;
      });

      return `<table-component current-page="1" limit="1"/>`;
    },
    { notes },
  );
