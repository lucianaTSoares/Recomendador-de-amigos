import { app } from '../../src/index';
import supertest from 'supertest';
import { TUser } from '../../src/types/index';

describe('Controller Criação de Usuário', () => {
  afterEach(async () => {
    await supertest(app).delete('/clean')
  });

  it('Deve criar um novo usuário', async () => {
    const mock: TUser = {
      cpf: '12345678909',
      name: 'Joaozinho',
    };

    const response = await supertest(app).post('/person').send(mock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mock);
  });

  it('Deve impossibilitar criação de usuário se CPF for inválido.', async () => {
    const response = await supertest(app).post('/person').send({
      cpf: '1234567890900',
      name: 'Joaozinho',
    });

    expect(response.status).toBe(400);
    expect(response.text).toBe('CPF inválido.');
  });

  it('Deve impossibilitar criação de usuário se ele já existir.', async () => {
    await supertest(app).post('/person').send({
      cpf: '12345678909',
      name: 'Joaozinho',
    });

    const response = await supertest(app).post('/person').send({
      cpf: '12345678909',
      name: 'Joaozinho',
    });

    expect(response.status).toBe(400);
    expect(response.text).toBe('Usuário já cadastrado.');
  });
});
