import React from 'react';

import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
};

const Button = (props: React.PropsWithChildren<Props>) => (
  <button
    className={styles.button}
    onClick={props.onClick}
    data-testid='button'
  >
    {props.children}
  </button>
);

export default React.memo(Button);
