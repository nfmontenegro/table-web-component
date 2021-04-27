import notes from './readme.md';
import { storiesOf } from '@storybook/html';

storiesOf('Search Component', module).add(
  'Default',
  () => {
    setTimeout(() => {
      const component = document.querySelector('search-component');
      component.setDefaultData = invokeSetDefaultData;
      component.updateList = invokeUpdateList;
    });

    function invokeSetDefaultData() {
      console.log('Reset data');
    }
    function invokeUpdateList() {
      console.log('Encontrar valor');
    }

    return `<search-component />`;
  },
  { notes },
);
