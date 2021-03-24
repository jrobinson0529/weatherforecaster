import errorMessage from '../components/errorMessage';
import titleInput from '../components/titleInput';
import weatherCard from '../components/weatherCard';
import getCurrentWeatherData from './data/weatherData';

const domEvents = () => {
  $('body').on('click', (e) => {
    if (e.target.id.includes('weather-search-submit')) {
      e.preventDefault();
      const city = $('#city').val();
      getCurrentWeatherData(city).then((response) => {
        console.warn(response);
        if ($(`#${response.id}`).length !== 0) {
          errorMessage(city);
        } else {
          weatherCard(response);
          titleInput(response.id, city);
        }
      });
    }
  });
};

export default domEvents;
