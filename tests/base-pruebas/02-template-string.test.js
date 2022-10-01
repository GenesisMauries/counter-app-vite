import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Componente template string', () => {
  test('getSaludo debe retornar Hola Génesis', () => {
    const name = 'Génesis';
    const message = getSaludo(name);
    expect(message).toBe('Hola Génesis');
    expect(message).not.toBe('Cualquier otra cosa');
  });
});
