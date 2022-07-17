import React from 'react';

import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSourceAmount, setTargetAmount } from '../../app/reducers/converterSlice';
import { positiveNumberNormalizer } from '../../utils/normalize';
import { throttle } from '../../utils/throttle';

import { Button } from '../../components/Button';
import { FeeInfo } from '../../components/FeeInfo';

import styles from './Converter.module.scss';
import { CurrencyInput } from '../../components/CurrencyInput';
import { Currency } from '../../models';

const Converter = () => {
  const [sourceValue, setSourceValue] = React.useState('');
  const [targetValue, setTargetValue] = React.useState('');

  const converterData = useAppSelector((state) => state.converter.data);
  const {
    fiat_blockchain_fee,
    absolute_internal_fee,
    total_fee,
    source_amount,
    target_amount
  } = converterData || {};

  const dispatch = useAppDispatch();

  const setSourceValueWithDelay = React.useRef(throttle((value: string) => {
    dispatch(setSourceAmount(Number(value)));
  }, 500));

  const setTargetValueWithDelay = React.useRef(throttle((value: string) => {
    dispatch(setTargetAmount(Number(value)));
  }, 500));

  const handleSourceChange = (value: string) => {
    setSourceValue(value);
    setSourceValueWithDelay.current(value);
  };

  const handleTargetChange = (value: string) => {
    setTargetValue(value);
    setTargetValueWithDelay.current(value);
  }

  // Set values returned form API to fields
  React.useEffect(() => {
    setSourceValue(source_amount ? String(source_amount) : '');
    setTargetValue(target_amount ? String(target_amount) : '');
  }, [source_amount, target_amount]);

  return (
    <div className={styles.window}>
      <h3>Select Your Amount</h3>
      <CurrencyInput
        currency={Currency.USD}
        className={styles.withMargin}
        normalize={positiveNumberNormalizer}
        value={sourceValue}
        onChange={handleSourceChange}
        maxLength={12}
        label='You pay'
      />
      <CurrencyInput
        currency={Currency.ETH}
        className={styles.withMargin}
        normalize={positiveNumberNormalizer}
        value={targetValue}
        onChange={handleTargetChange}
        maxLength={12}
        label='You Receive'
      />
      <FeeInfo
        networkFee={fiat_blockchain_fee}
        c14Fee={absolute_internal_fee}
        totalFee={total_fee}
      />
      <div className={cn(styles.button, styles.centered)}>
        <Button onClick={() => void 0}>BUY NOW</Button>
      </div>
    </div>
  );
};

export default Converter;