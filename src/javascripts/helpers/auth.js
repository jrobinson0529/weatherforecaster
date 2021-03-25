import firebase from 'firebase/app';
import 'firebase/auth';
import domBuilder from '../components/domBuilder';
import weatherSearchFormRead from '../components/forms/weatherSearchFormRead';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import { firebaseConfig } from './apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      domBuilder();
      weatherSearchFormRead();
      loginButton();
    }
  });
};

export default checkLoginStatus;
