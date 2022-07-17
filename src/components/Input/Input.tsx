import React from 'react';

import styles from './Input.module.scss';

type DefaultInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

type Props = DefaultInputProps & {
  value: string;
  label?: string;
  onChange: (value: string) => void;
  normalize?: (value: string) => string;
};

const Input = (props: Props) => {
  const { value, onChange, normalize, label = '', ...inputProps } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const newValue = normalize ? normalize(event.currentTarget.value) : event.currentTarget.value;
    onChange(newValue);
  };

  const inputClass = React.useMemo(() =>
    `${styles.input} ${value.length > 0 ? styles.hasValue : ''}`,
    [value.length]
  );

  return (
    <div className={styles.field}>
      <input
        {...inputProps}
        className={inputClass}
        value={value}
        onChange={handleChange}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Input;