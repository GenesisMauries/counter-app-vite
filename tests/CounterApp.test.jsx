import { fireEvent, render, screen } from '@testing-library/react';
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

  //Eventos
  test('Debe incrementar con el boton +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1')); // Simula evento click en el boton
    expect(screen.getByText('11')).toBeTruthy();
  });
  test('Debe decrementar con el boton -1', () => {
    render(<CounterApp value={value} />);
    // screen.debug() // ver el estado antes de la simulcion del click 10
    fireEvent.click(screen.getByText('-1')); // Simula evento click en el boton
    // screen.debug() // ver el estado despues de la simulcion del click 9
    expect(screen.getByText('9')).toBeTruthy();
  });
  test('Debe funcionar el boton de reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // screen.debug()  // Suma 317
    // Obtener el boton por rol
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(value)).toBeTruthy();
  });
});
