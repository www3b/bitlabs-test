import { Currency } from ".";

export enum LoadingStatus {
  Idle,
  Loading,
  Success,
  Fail,
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

export type ApiError = {
  error_code: string;
  message: string;
};
