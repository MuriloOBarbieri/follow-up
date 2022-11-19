import { describe, it, expect, jest } from '@jest/globals';
import CriaUsuarioCasoDeUso from '../../src/casos-de-uso/cria-usuario';

const userRepositoryMock = {
  listAll: jest.fn(() => []),
  save: (user) => user,
};

const usuario = {
  name: 'Murilo',
  email: 'Murilo.barbieri@mail.com',
  password: 'senhateste123',
};

describe('Teste para criar usuario', () => {
  it('Devera retornar o usuario criado', async () => {
    const criaUsuariocasoDeuso = new CriaUsuarioCasoDeUso(userRepositoryMock);
    const { user } = await criaUsuariocasoDeuso.execute(usuario);

    expect(user).toStrictEqual({
      id: expect.any(String),
      name: 'Murilo',
      email: 'Murilo.barbieri@mail.com',
      createdDate: expect.stringMatching(/\d{4}(-\d{2}){2}/),
    });
  });

  it('Email ja cadastrado', async () => {
    userRepositoryMock.listAll.mockImplementationOnce(() => [usuario]);

    const criaUsuariocasoDeuso = new CriaUsuarioCasoDeUso(userRepositoryMock);
    const createUserExecute = () => criaUsuariocasoDeuso.execute(usuario);

    expect(createUserExecute()).resolves.toThrowError();
  });
});
