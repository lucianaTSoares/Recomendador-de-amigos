import { IPersonRepository } from '../../person/repositories/IPersonRepositories';
import { IRelationshipRepository } from '../../relationship/repositories/IRelationshipRepositories';

class CleanAllMemoryDataUseCase {
  constructor(
    private personRepository: IPersonRepository,
    private relationshipRepository: IRelationshipRepository,
  ) {}

  /**
   * Limpa todos os dados armazenados em memória.
   * @returns 200: Dados excluídos.
   * @returns 500: Falha ao excluir dados.
   */
  execute() {
    const users = this.personRepository.delete();
    const relationships = this.relationshipRepository.delete();

    if (users.length && relationships.length) {
      return { status: 500, data: 'Falha ao excluir dados.' };
    }

    return { status: 200, data: 'Dados excluídos.' };
  }
}

export { CleanAllMemoryDataUseCase };
