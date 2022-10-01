import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Componente retornaArreglo', () => {
  test('retornaArreglo debe retornar un arreglo', () => {
    const [letras, numeros] = retornaArreglo();
    expect(typeof numeros).toBe('number');
    expect(typeof letras).toBe('string');
    // con expect.any(String) indicamos que espera cualquier tipo de string
    expect(letras).toEqual(expect.any(String));
    expect(numeros).toEqual(expect.any(Number));
  });
});
