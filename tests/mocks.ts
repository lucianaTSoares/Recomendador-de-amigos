import { TRelationship, TUser } from '../src/types/index';

const usersMock: TUser[] = [
  {
    cpf: '11111111111',
    name: 'Joaozinho 1',
  },
  {
    cpf: '22222222222',
    name: 'Joaozinho 2',
  },
  {
    cpf: '33333333333',
    name: 'Joaozinho 3',
  },
  {
    cpf: '44444444444',
    name: 'Joaozinho 4',
  },
  {
    cpf: '55555555555',
    name: 'Joaozinho 5',
  },
];

const relationshipsMock: TRelationship[] = [
  {
    cpf1: '11111111111',
    cpf2: '22222222222',
  },
  {
    cpf1: '11111111111',
    cpf2: '33333333333',
  },
  {
    cpf1: '22222222222',
    cpf2: '44444444444',
  },
  {
    cpf1: '33333333333',
    cpf2: '44444444444',
  },
  {
    cpf1: '33333333333',
    cpf2: '55555555555',
  },
];

export { usersMock, relationshipsMock };
