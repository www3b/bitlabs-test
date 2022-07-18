import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';

const handleChange = jest.fn(() => void 0);

describe('<Input /> component', () => {
  test('renders Input component', () => {
    render(<Input value='test value' onChange={handleChange} />);
    const inputElement = screen.getByDisplayValue(/test value/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders label for input', () => {
    render(<Input value='' label='type here' onChange={handleChange} />);
    const labelElement = screen.getByText(/type here/i);
    expect(labelElement).toBeInTheDocument();
  })

  test('Call onChange callback with argument', () => {
    render(<Input value='test value' onChange={handleChange} />)
    const inputElement = screen.getByTestId('input');
    fireEvent.change(inputElement, { target: { value: 'changed text' } });
    expect(handleChange).toBeCalledWith('changed text');
  });

  test('Normalize function works properly', () => {
    render(
      <Input
        value='test value'
        onChange={handleChange}
        normalize={(value) => value.replace(/\D/g, '')}
      />
    );
    const inputElement = screen.getByTestId('input');
    fireEvent.change(inputElement, { target: { value: 'test 123' } });
    expect(handleChange).toBeCalledWith('123');
  });

  test('Add "hasValue" class when value is not empty', () => {
    const { rerender } = render(
      <Input
        value=''
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByTestId('input');
    expect(inputElement).not.toHaveClass('hasValue');
    rerender(
      <Input
        value='test'
        onChange={handleChange}
      />
    )
    expect(inputElement).toHaveClass('hasValue');
  });
});
