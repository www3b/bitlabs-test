import React from 'react';

import styles from './Input.module.scss';

type Props = {
  value: string;
  label?: string;
  onChange: (value: string) => void;
};

const Input = (props: Props) => {
  const { value, onChange, label = '' } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    onChange(event.currentTarget.value);
  };

  const inputClass = React.useMemo(() =>
    `${styles.input} ${value.length > 0 ? styles.hasValue : ''}`,
    [value.length]
  );

  return (
    <div className={styles.field}>
      <input className={inputClass} type='text' value={value} onChange={handleChange} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Input;