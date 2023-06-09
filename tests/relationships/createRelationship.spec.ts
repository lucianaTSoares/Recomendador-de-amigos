import supertest from 'supertest';
import { app } from '../../src/index';
import { usersMock } from '../mocks';

describe('Criar relação entre usuários', () => {
  beforeAll(() => {
    usersMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );
  });

  it('Deve criar uma relação.', async () => {
    const relationMock = {
      cpf1: '11111111111',
      cpf2: '22222222222',
    };

    const response = await supertest(app)
      .post('/relationship')
      .send(relationMock);

    expect(response.body).toEqual(relationMock);
    expect(response.status).toBe(200);
  });

  it('Deve retornar erro caso a relação não seja encontrada.', async () => {
    const relationMock = {
      cpf1: '33333333377',
      cpf2: '22222222222',
    };

    const response = await supertest(app)
      .post('/relationship')
      .send(relationMock);

    expect(response.text).toBe('Um dos usuários não existe.');
    expect(response.status).toBe(404);
  });
});
