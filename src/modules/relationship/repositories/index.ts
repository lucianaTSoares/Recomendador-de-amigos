import { TRelationship } from '../../../types/index';
import { IRelationshipRepository } from './IRelationshipRepositories';

class RelationshipRepository implements IRelationshipRepository {
  private relationships: TRelationship[] = [];

  create({ cpf1, cpf2 }: TRelationship): TRelationship | undefined {
    this.relationships.push({ cpf1, cpf2 });

    const relation = this.relationships.find((relation) => [
      cpf1 === relation.cpf1 && cpf2 === relation.cpf2,
    ]);

    return relation;
  }

  getAll(): TRelationship[] {
    return this.relationships;
  }

  findByCPF(cpf: string): TRelationship[] {
    const relationshipsFound = this.relationships.filter((relation) =>
      [relation.cpf1, relation.cpf2].includes(cpf),
    );

    return relationshipsFound;
  }

  delete(): TRelationship[] {
    this.relationships.splice(0, this.relationships.length);

    return this.relationships;
  }
}

export { RelationshipRepository };
