import domBuilder from '../components/domBuilder';
import weatherSearchForm from '../components/forms/weatherSearchForm';
import weatherCard from '../components/weatherCard';
import { getUserWeatherData } from './data/weatherData';
import domEvents from './domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  getUserWeatherData(user.uid).then((array) => weatherCard(array));
  weatherSearchForm();
};

export default startApp;
