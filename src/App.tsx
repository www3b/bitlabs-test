import React from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { Converter } from './features/Converter';

import './styles/global.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Converter />
      </div>
    </Provider>
  );
}

export default App;
