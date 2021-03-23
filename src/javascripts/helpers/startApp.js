import domBuilder from '../components/domBuilder';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
};

export default startApp;
