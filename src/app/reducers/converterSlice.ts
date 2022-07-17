import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InputData, QuoteData } from './../../models';

type ConverterState = {
  input?: InputData;
  data: QuoteData | null;
};

const initialState: ConverterState = {
  data: null,
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setSourceAmount: (state, action: PayloadAction<number>) => {
      state.input = { field: 'source_amount', value: action.payload };
    },
    setTargetAmount: (state, action: PayloadAction<number>) => {
      state.input = { field: 'target_amount', value: action.payload };
    },
    setQuoteData: (state, action: PayloadAction<QuoteData>) => {
      state.data = action.payload
    }
  }
});

export const { setSourceAmount, setTargetAmount, setQuoteData } = converterSlice.actions;

export default converterSlice.reducer;
