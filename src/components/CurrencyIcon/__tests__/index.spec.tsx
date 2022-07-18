import React from 'react';

import { render, screen } from '@testing-library/react';
import CurrencyIcon from '../CurrencyIcon';
import { Currency } from '../../../models';

describe('<CurrencyIcon /> component', () => {
  test('renders CurrencyIcon component', () => {
    render(<CurrencyIcon currency={Currency.USD} />);
    const component = screen.getByTestId('currency-icon');
    expect(component).toBeInTheDocument();
  });

  test('Set class depend on currency prop', () => {
    const { rerender } = render(<CurrencyIcon currency={Currency.USD} />);
    const component = screen.getByTestId('currency-icon');
    expect(component).toHaveClass('usd');
    rerender(<CurrencyIcon currency={Currency.ETH} />)
    expect(component).toHaveClass('eth');
  });
});
