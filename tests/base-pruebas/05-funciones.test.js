import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Componente funciones', () => {
  test('getUser debe retornar un obejto', () => {
    const userMock = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();

    expect(typeof user).toBe('object');
    expect(typeof user).not.toBe('string');
    expect(user).toEqual(userMock);
  });
  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Génesis';
    const userResult = {
      uid: 'ABC567',
      username: name,
    };
    const userActive = getUsuarioActivo(name);
    expect(userActive).toStrictEqual(userResult);
  });
});
