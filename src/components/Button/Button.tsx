import React from 'react';

import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
};

const Button = (props: React.PropsWithChildren<Props>) => {
  const { onClick } = props;
  return (
    <button className={styles.button} onClick={onClick} data-testid='button'>{props.children}</button>
  );
};

export default React.memo(Button);
