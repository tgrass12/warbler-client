import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Main from './Main'
import Navbar from './Navbar';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';

const store = configureStore();

if(localStorage.token) {
  setAuthorizationToken(localStorage.token);

  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
  } catch(err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);


export default App;
