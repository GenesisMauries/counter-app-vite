import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Componente promesas', () => {
  test('getHeroeByIdAsync retornar un heroe', (done) => {
    const id = 1;
    const batman = {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    };
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(batman);
      done(); // va dentro del then en pruebas asincronas
    });
  });
  test('getHeroeByIdAsync retornar error si el heroe no existe', (done) => {
    const id = 31;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe' + id);
      done(); // va dentro del then en pruebas asincronas
    });
    // .then((hero) => {
    //   expect(hero).toBeFalsy();
    //   done();
    // });
  });
});
