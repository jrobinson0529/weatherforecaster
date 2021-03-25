import axios from 'axios';
import { openWeatherConfig } from '../apiKeys';

const dbUrl = openWeatherConfig.weatherDatabaseURL;
const getCurrentWeatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/data/2.5/weather?q=${city},us&APPID=${openWeatherConfig.weatherApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCurrentWeatherData;
