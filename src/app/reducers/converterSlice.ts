import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InputData, LoadingStatus, QuoteData } from './../../models';

type ConverterState = {
  input?: InputData;
  data: QuoteData | null;
  loadingStatus: LoadingStatus;
  errorMessage?: string;
};

const initialState: ConverterState = {
  data: null,
  loadingStatus: LoadingStatus.Idle,
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    // Data
    setSourceAmount: (state, action: PayloadAction<number>) => {
      state.input = { field: 'source_amount', value: action.payload };
    },
    setTargetAmount: (state, action: PayloadAction<number>) => {
      state.input = { field: 'target_amount', value: action.payload };
    },
    setQuoteData: (state, action: PayloadAction<QuoteData>) => {
      state.data = action.payload;
    },
    // API
    initRequest: (state) => {
      state.loadingStatus = LoadingStatus.Loading;
    },
    successRequest: (state) => {
      state.loadingStatus = LoadingStatus.Success
      state.errorMessage = undefined;
    },
    failRequest: (state, action: PayloadAction<string>) => {
      state.loadingStatus = LoadingStatus.Fail;
      state.data = null;
      state.errorMessage = action.payload;
    }
  }
});

export const {
  setSourceAmount,
  setTargetAmount,
  setQuoteData,
  initRequest,
  successRequest,
  failRequest,
} = converterSlice.actions;

export default converterSlice.reducer;
