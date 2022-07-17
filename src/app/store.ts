import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import converterSlice from './reducers/converterSlice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    converter: converterSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
