import React from 'react';

import { render, screen } from '@testing-library/react';
import CurrencyInput from '../CurrencyInput';
import { Currency } from '../../../models';

const inputProps = {
  value: 'value',
  onChange: jest.fn(() => void 0),
}

describe('<CurrencyInput /> component', () => {
  test('renders CurrencyIcon component inside Input', () => {
    render(<CurrencyInput {...inputProps} currency={Currency.USD} />);
    const component = screen.getByTestId('currency-icon');
    expect(component).toBeInTheDocument();
  });
});
