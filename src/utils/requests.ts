import api from "./api";
import { Currency } from "../models";

const CRYPTO_ASSET_ID = 'b2384bf2-b14d-4916-aa97-85633ef05742';

export function quoteDataRequest(field: string, value: number) {
  return api.post('/quotes', {
    [field]: value.toString(),
    source_currency: Currency.USD,
    target_crypto_asset_id: CRYPTO_ASSET_ID,
  });
};