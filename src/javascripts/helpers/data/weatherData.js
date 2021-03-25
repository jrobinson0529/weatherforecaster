import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.weatherDatabaseURL;
const getCurrentWeatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/data/2.5/weather?q=${city},us&APPID=${firebaseConfig.weatherApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCurrentWeatherData;
