import { all, call, takeLatest, select, apply, put } from 'redux-saga/effects';

import { RootState } from './store';
import { InputData, QuoteData } from './../models/index';
import { setSourceAmount, setTargetAmount, setQuoteData } from './reducers/converterSlice';
import { quoteDataRequest } from '../utils/requests';

function* fetchQuoteData() {
  const { field, value }: InputData = yield select((state: RootState) => state.converter.input)
  if (!field || !value) {
    return;
  }
  const response: QuoteData = yield call(quoteDataRequest, field, value);
  yield put(setQuoteData(response));
};

function* watchSourceChange() {
  yield takeLatest(setSourceAmount, fetchQuoteData);
};

function* watchTargetChange() {
  yield takeLatest(setTargetAmount, fetchQuoteData);
};

function* rootSaga() {
  yield all([
    call(watchSourceChange),
    call(watchTargetChange),
  ]);
};

export default rootSaga;
