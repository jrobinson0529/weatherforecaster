import errorMessage from '../components/errorMessage';
import weatherCard from '../components/weatherCard';
import {
  createUserWeatherData,
  deleteUserWeatherData,
  getCurrentWeatherData,
  getUserWeatherData
} from './data/weatherData';

const domEvents = (uid) => {
  $('body').on('click', (e) => {
    if (e.target.id.includes('weather-search-submit')) {
      e.preventDefault();
      const city = $('#city').val();
      getCurrentWeatherData(city).then((response) => {
        if ($(`#${response.id}`).length !== 0) {
          errorMessage(city);
        } else {
          const currentTemp = Math.round(response.main.temp);
          const cityName = response.name;
          const weatherDescription = response.weather[0].description;
          const image = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
          const cityId = response.id;
          const weatherObject = {
            cityName,
            currentTemp,
            weatherDescription,
            uid,
            image,
            cityId,
          };
          createUserWeatherData(weatherObject).then(() => getUserWeatherData(uid).then((array) => weatherCard(array)));
        }
      });
    }
    if (e.target.id.includes('delete-card')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      deleteUserWeatherData(firebaseKey, uid).then((array) => weatherCard(array));
    }
  });
};

export default domEvents;
