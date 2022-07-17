export enum Currency {
  USD = 'USD',
};

export type CreateQuoteResponse = {
  id: string;
  source_currency: Currency;
  target_crypto_asset_id: string;
  source_amount: number;
  target_amount: number;
  fiat_blockchain_fee: number;
  absolute_internal_fee: number;
  full_fee: number;
  internal_fee_percent: number;
  expires_at: Date;
};

export type CreateQuotePayload = {
  source_currency: Currency;
  target_crypto_asset_id: string;
  source_amount?: number;
  target_amount?: number;
};

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
