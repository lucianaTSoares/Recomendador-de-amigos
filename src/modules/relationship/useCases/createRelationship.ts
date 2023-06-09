import { TRelationship } from '../../../types/index';
import { IPersonRepository } from '../../person/repositories/IPersonRepositories';
import { IRelationshipRepository } from '../repositories/IRelationshipRepositories';

class CreateRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
    private readonly personRepository: IPersonRepository,
  ) {}

  /**
   * Realiza a criação de uma relação entre 2 usuários.
   * @param {string} req.body.cpf1 String contendo o CPF de um usuário
   * @param {string} req.body.cpf2 String contendo o CPF de outro usuário
   * @returns 200 e relação criada
   * @returns 404: Um dos usuários não existe.
   */
  execute({ cpf1, cpf2 }: TRelationship) {
    const relationship = { cpf1, cpf2 };
    const usersFound = this.personRepository.getByCPFs([cpf1, cpf2]);

    if (usersFound.length < 2) {
      return { status: 404, data: 'Um dos usuários não existe.' };
    }

    this.relationshipRepository.create(relationship);

    return { status: 200, data: relationship };
  }
}

export { CreateRelationshipUseCase };
