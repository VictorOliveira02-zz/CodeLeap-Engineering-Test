import React from "react";
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import './global.css'
import 'semantic-ui-css/semantic.min.css'

import Navigator from "./Navigation/Navigator";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);