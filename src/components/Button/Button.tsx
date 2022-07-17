import React from 'react';

import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
};

const Button = (props: React.PropsWithChildren<Props>) => {
  const { onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>{props.children}</button>
  );
};

export default Button;