import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider} from "react-redux";
import store from './Store';
import {positions, transitions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  positions:positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
}
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


