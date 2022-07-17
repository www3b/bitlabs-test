import React from 'react';

import styles from './FeeInfo.module.scss';

type Props = Partial<{
  networkFee: number;
  c14Fee: number;
  totalFee: number;
}>;

const FeeInfo = (props: Props) => {
  const { networkFee, c14Fee, totalFee } = props;
  const hasValues = networkFee && c14Fee && totalFee;
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Fees</span>
      <div className={styles.window}>
        {hasValues && (
          <>
            <span className={`${styles.value} ${styles.network}`}>{networkFee}</span>+
            <span className={`${styles.value} ${styles.c14}`}>{c14Fee}</span> =
            <span className={`${styles.value} ${styles.total}`}>{totalFee}</span>
          </>
        )}

      </div>
    </div>
  )
}

export default FeeInfo