import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSourceAmount, setTargetAmount } from '../../app/reducers/converterSlice';
import { positiveNumberNormalizer } from '../../utils/normalize';
import { throttle } from '../../utils/throttle';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FeeInfo } from '../../components/FeeInfo';

import styles from './Converter.module.scss';

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
      <div className={styles.withMargin}>
        <Input
          normalize={positiveNumberNormalizer}
          value={sourceValue}
          onChange={handleSourceChange}
          label='You pay'
        />
      </div>
      <div className={styles.withMargin}>
        <Input
          normalize={positiveNumberNormalizer}
          value={targetValue}
          onChange={handleTargetChange}
          label='You Receive'
        />
      </div>
      <div className={styles.withMargin}>
        <FeeInfo networkFee={fiat_blockchain_fee} c14Fee={absolute_internal_fee} totalFee={total_fee} />
      </div>
      <div className={`${styles.withMargin} ${styles.centered}`}>
        <Button onClick={() => void 0}>BUY NOW</Button>
      </div>
    </div>
  );
};

export default Converter;