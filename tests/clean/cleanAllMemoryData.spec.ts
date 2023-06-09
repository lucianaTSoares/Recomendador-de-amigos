import { relationshipsMock, usersMock } from '../mocks';
import supertest from 'supertest';
import { app } from '../../src/index';

describe('Limpar todos os dados em memória.', () => {

  beforeAll(() => {
    usersMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );

    relationshipsMock.forEach(
      async (relation) =>
        await supertest(app).post('/relationship').send(relation),
    );
  });

  it('Deve limpar todos os dados existentes um memória', async () => {
    const response = await supertest(app).delete('/clean');

    expect(response.text).toBe('Dados excluídos.');
    expect(response.status).toBe(200);
  });
});
