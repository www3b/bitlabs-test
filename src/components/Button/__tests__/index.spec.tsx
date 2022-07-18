import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

const handleClick = jest.fn(() => void 0);

describe('<Button /> component', () => {
  test('renders Button component', () => {
    render(<Button onClick={handleClick}>button</Button>);
    const inputElement = screen.getByText(/button/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('Call onClick callback with argument', () => {
    render(<Button onClick={handleClick}>button</Button>);
    const inputElement = screen.getByTestId('button');
    fireEvent.click(inputElement);
    expect(handleClick).toBeCalled();
  });
});
