import React from 'react';

import styles from './FeeInfo.module.scss';

type Props = {
  networkFee: number;
  c14Fee: number;
}

const FeeInfo = (props: Props) => {
  const { networkFee, c14Fee } = props;

  const totalFee = networkFee + c14Fee;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Fees</span>
      <div className={styles.window}>
        <span className={`${styles.value} ${styles.network}`}>{networkFee}</span>+
        <span className={`${styles.value} ${styles.c14}`}>{c14Fee}</span> =
        <span className={`${styles.value} ${styles.total}`}>{totalFee}</span>
      </div>
    </div>
  )
}

export default FeeInfo