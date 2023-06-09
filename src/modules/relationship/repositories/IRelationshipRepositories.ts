import { TRelationship } from '../../../types/index';

interface IRelationshipRepository {
  create({ cpf1, cpf2 }: TRelationship): TRelationship | undefined;
  getAll(): TRelationship[];
  findByCPF(cpf: string): TRelationship[];
  delete(): TRelationship[];
}

export { IRelationshipRepository };
