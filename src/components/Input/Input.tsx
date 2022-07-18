import React from 'react';

import cn from 'classnames';

import styles from './Input.module.scss';

type DefaultInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export type Props = DefaultInputProps & {
  value: string;
  label?: string;
  onChange: (value: string) => void;
  normalize?: (value: string) => string;
};

const Input = (props: Props) => {
  const { value, onChange, normalize, label = '', className, ...inputProps } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const newValue = normalize ? normalize(event.currentTarget.value) : event.currentTarget.value;
    onChange(newValue);
  };

  const hasValue = value.length > 0;

  const fieldClass = cn(styles.field, className);

  const inputClass = cn(styles.input, {
    [styles.hasValue]: hasValue,
  });

  return (
    <div className={fieldClass}>
      <input
        {...inputProps}
        className={inputClass}
        value={value}
        onChange={handleChange}
        data-testid='input'
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Input;
