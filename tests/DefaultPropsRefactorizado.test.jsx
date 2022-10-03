import { render, screen } from '@testing-library/react';
import { DefaultProps } from '../src/DefaultProps';

describe('Pruebas <DefaultProps7>', () => {
  // Hace una captura del componente y la almacena en la carpeta __snapshots__
  const title = '123';
  const subTitle = 'Subtitulo';
  test('Debe hacer match con snapshot', () => {
    const { container } = render(<DefaultProps title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('Debe mostrar el mensaje 123', () => {
    // screen.debug(); // screen antes de montar el componente
    render(<DefaultProps title={title} />);
    // screen.debug(); // screen despues de montar/render el componente
    expect(screen.getByText(title)).toBeTruthy();
  });
  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<DefaultProps title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle)).toBeTruthy();
  });
});
