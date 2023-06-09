import supertest from 'supertest';
import { TUser } from '../../src/types/index';
import { app } from '../../src/index';

describe('Busca de usuário por CPF', () => {
  it('Deve retornar um usuário criado.', async () => {
    const mock: TUser = {
      cpf: '12345678909',
      name: 'Joaozinho',
    };

    await supertest(app).post('/person').send(mock);

    const response = await supertest(app).get(`/person/${mock.cpf}`);

    expect(response.body).toEqual(mock);
    expect(response.status).toBe(200);
  });

  it('Deve retornar erro caso o usuário não for encontrado.', async () => {
    const cpf = '12345678909';

    const response = await supertest(app)
      .get('/person/:CPF')
      .query({ CPF: cpf });

    expect(response.text).toBe('Usuário não encontrado.');
    expect(response.status).toBe(404);
  });
});
