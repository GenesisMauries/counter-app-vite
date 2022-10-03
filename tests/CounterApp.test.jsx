import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe("'Pruebas <CounterApp/>", () => {
  const value = 10;
  test('Debe hacer match con snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });
  test('Debe tener un valir inicial de 10', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
