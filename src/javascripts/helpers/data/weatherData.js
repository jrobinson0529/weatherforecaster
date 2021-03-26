import axios from 'axios';
import { firebaseConfig, openWeatherConfig } from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const weatherDbUrl = openWeatherConfig.weatherDatabaseURL;
const getCurrentWeatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`${weatherDbUrl}/data/2.5/weather?q=${city},us&APPID=${openWeatherConfig.weatherApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const getUserWeatherData = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/city.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const createUserWeatherData = (object, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/city.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/city/${response.data.name}.json`, body);
    })
    .then(() => getUserWeatherData(uid).then((array) => resolve(array)))
    .catch((error) => reject(error));
});
const deleteUserWeatherData = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/city/${firebaseKey}.json`)
    .then(() => getUserWeatherData(uid).then((response) => resolve(response)))
    .catch((error) => reject(error));
});

export {
  createUserWeatherData,
  getCurrentWeatherData,
  getUserWeatherData,
  deleteUserWeatherData
};
