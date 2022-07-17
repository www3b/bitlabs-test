export type InputData = {
  field?: 'source_amount' | 'target_amount';
  value?: number;
};

export type QuoteData = {
  source_amount: number;
  target_amount: number;
  fiat_blockchain_fee: number;
  absolute_internal_fee: number;
  total_fee: number;
  internal_fee_percent: number;
};
