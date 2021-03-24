import domBuilder from '../components/domBuilder';
import weatherSearchForm from '../components/forms/weatherSearchForm';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  weatherSearchForm();
};

export default startApp;
