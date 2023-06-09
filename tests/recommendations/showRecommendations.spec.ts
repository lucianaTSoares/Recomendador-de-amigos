import supertest from 'supertest';
import { usersMock, relationshipsMock } from '../mocks';
import { app } from '../../src/index';

describe('Mostrar recomendações de amigos', () => {
  beforeAll(() => {
    usersMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );

    relationshipsMock.forEach(
      async (relation) =>
        await supertest(app).post('/relationship').send(relation),
    );
  });

  it('Deve retornar uma lista com CPFs recomendados.', async () => {
    const cpf = '11111111111';
    const expectedResponse = ['44444444444', '55555555555'];

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.body).toEqual(expectedResponse);
    expect(response.status).toBe(200);
  });

  it('Deve retornar erro caso o usuário não for encontrado.', async () => {
    const cpf = '11111111112';

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.text).toBe('Usuário não encontrado.');
    expect(response.status).toBe(404);
  });

  it('Deve retornar erro caso o CPF for inválido.', async () => {
    const cpf = '111111111110';

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.text).toBe('CPF inválido.');
    expect(response.status).toBe(400);
  });
});
