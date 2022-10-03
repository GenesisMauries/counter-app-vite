import { render } from '@testing-library/react';
import { DefaultProps } from '../src/DefaultProps';

describe('Pruebas <DefaultProps7>', () => {
  test('Debe mostrar el titulo en un p', () => {
    const title = '123';
    // RENDER Actualiza el objeto screen, en el objeto render hay mucha info
    const { container, getByText, getByTestId } = render(
      <DefaultProps title={title} />
    );

    expect(getByText(title)).toBeTruthy(); // Busca por texto o que exista el texto
    // const p = container.querySelector('p');
    // expect(p.innerHTML).toBe(title);
    // Toma el elemento por ID
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });
  test('Deme mostrar el subtitlo enviado por props', () => {
    const title = 'Titulo';
    const subTitle = 'Subtitulo';
    // RENDER Actualiza el objeto screen, en el objeto render hay mucha info
    const { getByText, getAllByText } = render(
      <DefaultProps title={title} subTitle={subTitle} />
    );
    // Sirve para testear un elemento
    // expect(getByText(subTitle)).toBeTruthy();
    // Testea todas las coincidencias de texto y devuelve un arreglo
    expect(getAllByText(subTitle).length).toBe(3);
  });
});
