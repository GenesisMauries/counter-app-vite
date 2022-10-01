import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp.js';

describe('Componente import/export', () => {
  const flash = {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  };
  const marvelArr = [
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel',
    },
  ];
  const dcArr = [
    {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC',
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC',
    },
  ];
  test('getHeroeById retornar un heroe por id', () => {
    expect(getHeroeById(4)).toStrictEqual(flash);
  });
  test('getHeroeById retornar undefined si el id no existe', () => {
    expect(getHeroeById(14)).toBeUndefined();
  });

  test('getHeroesByOwner retornar arreglo de 3 elementos para DC', () => {
    expect(getHeroesByOwner('DC')).toHaveLength(3);
    expect(getHeroesByOwner('DC')).toEqual(dcArr);
  });
  test('getHeroesByOwner retornar arreglo de 2 objetos para Marvel', () => {
    expect(getHeroesByOwner('Marvel')).toStrictEqual(marvelArr);
    expect(getHeroesByOwner('Marvel')).toHaveLength(2);
  });
});
