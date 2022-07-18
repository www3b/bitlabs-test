import React from 'react';

import { render, screen } from '@testing-library/react';
import FeeInfo from '../FeeInfo';

const feeInfoProps = {
  networkFee: 1,
  c14Fee: 2,
  totalFee: 3,
};

describe('<CurrencyIcon /> component', () => {
  test('renders empty window', () => {
    render(<FeeInfo />);
    const component = screen.getByText('Fees');
    expect(component).toBeInTheDocument();
  });

  test('renders window with values', () => {
    render(<FeeInfo {...feeInfoProps} />);
    const networkFee = screen.getByText('1');
    const c14Fee = screen.getByText('2');
    const totalFee = screen.getByText('3');
    expect(networkFee).toHaveClass('network');
    expect(c14Fee).toHaveClass('c14');
    expect(totalFee).toHaveClass('total');
  });
});
