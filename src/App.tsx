import React from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App" />
    </Provider>
  );
}

export default App;
