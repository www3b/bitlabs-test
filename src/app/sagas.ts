import { all, call, takeLatest, select, put } from 'redux-saga/effects';

import { RootState } from './store';
import { ApiError, InputData, QuoteData } from './../models/index';
import {
  setSourceAmount,
  setTargetAmount,
  setQuoteData,
  initRequest,
  successRequest,
  failRequest
} from './reducers/converterSlice';
import { quoteDataRequest } from '../utils/requests';

function* fetchQuoteData() {
  yield put(initRequest());
  const { field, value }: InputData = yield select((state: RootState) => state.converter.input)
  if (!field || !value) {
    return;
  }
  try {
    const response: QuoteData = yield call(quoteDataRequest, field, value);
    yield put(successRequest());
    yield put(setQuoteData(response));
  } catch(e) {
    yield put(failRequest((e as ApiError).message));
  }
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
