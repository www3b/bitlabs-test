import React from 'react';

import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: React.PropsWithChildren<Props>) => (
  <button
    className={styles.button}
    onClick={props.onClick}
    disabled={props.disabled}
    data-testid='button'
  >
    {props.children}
  </button>
);

export default React.memo(Button);
