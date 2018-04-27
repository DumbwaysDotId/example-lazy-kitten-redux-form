/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ScreenForm from './src/ScreenForm';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <ScreenForm />
  </Provider>
)

export default App;