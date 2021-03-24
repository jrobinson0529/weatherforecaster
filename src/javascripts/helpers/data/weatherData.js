import axios from 'axios';
import weatherApiConfig from '../apiKeys';

const dbUrl = weatherApiConfig.databaseURL;
const getCurrentWeatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/data/2.5/weather?q=${city},us&APPID=${weatherApiConfig.apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCurrentWeatherData;
