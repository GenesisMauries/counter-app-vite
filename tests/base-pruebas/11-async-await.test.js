import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('', () => {
  test('getImagen debe retornar url', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
});
