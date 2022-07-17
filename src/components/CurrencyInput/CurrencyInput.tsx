import React from 'react';
import { Currency } from '../../models';
import { CurrencyIcon } from '../CurrencyIcon';

import { Input, InputProps } from '../Input';

import styles from './CurrencyInput.module.scss';

type Props = InputProps & {
  currency: Currency;
}

const CurrencyInput = (props: Props) => {
  const { currency, ...inputProps } = props;
  return (
    <div className={styles.wrapper}>
      <Input {...inputProps} />
      <CurrencyIcon currency={currency} />
    </div>
  )
}

export default CurrencyInput