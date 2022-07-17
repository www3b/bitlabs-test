import React from 'react';

import cn from 'classnames';
import { Currency } from '../../models';

import styles from './CurrencyIcon.module.scss';

type Props = {
  currency: Currency;
};

const currencyClassMap = {
  [Currency.USD]: styles.usd,
  [Currency.ETH]: styles.eth,
};

const CurrencyIcon = (props: Props) => {
  const currencyClass = currencyClassMap[props.currency];
  return (
    <div className={cn(styles.icon, currencyClass)} />
  );
};

export default CurrencyIcon