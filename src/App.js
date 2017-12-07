import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // middleware berhubungan dengan redux-thunk
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // untuk handle asinkron di index nya acrion
import reducers from './reducers'; 
//import LoginForm from './components/loginForm'; // terganti oleh Router
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDF7-L84gZYGveDZUKU0XzVr55bZW6t164",
      authDomain: "manager-807b0.firebaseapp.com",
      databaseURL: "https://manager-807b0.firebaseio.com",
      projectId: "manager-807b0",
      storageBucket: "manager-807b0.appspot.com",
      messagingSenderId: "200465298360"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;