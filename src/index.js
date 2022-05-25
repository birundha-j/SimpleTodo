import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './login';
import Test from './test'
import Canva from './canvasTest';
import LifeCycle from './lifeCycke';
import ApiCall from './apiCall';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApiCall />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
