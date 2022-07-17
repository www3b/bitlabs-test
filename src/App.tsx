import React from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import './styles/global.scss';
import { Converter } from './features/Converter';


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
