import { all, call, takeLatest, select, apply, put } from 'redux-saga/effects';

import { RootState } from './store';
import api from '../utils/api';
import { InputData, QuoteData, Currency } from './../models/index';
import { setSourceAmount, setTargetAmount, setQuoteData } from './reducers/converterSlice';

function* fetchQuoteData() {
  const { field, value }: InputData = yield select((state: RootState) => state.converter.input)
  if (!field || !value) {
    return;
  }
  const response: QuoteData = yield apply(api, api.post, [
    '/quotes',
    {
      [field]: value.toString(),
      source_currency: Currency.USD,
      target_crypto_asset_id: "b2384bf2-b14d-4916-aa97-85633ef05742",
    }
  ]);
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
