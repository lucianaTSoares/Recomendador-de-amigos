import { IPersonRepository } from '../repositories/IPersonRepositories';

class GetPersonByCPFUseCase {
  constructor(private personRepository: IPersonRepository) {}

  /**
   * Busca um usuário através do CPF.
   * @param {string} cpf String contendo o CPF do usuário.
   * @returns 200 e usuário encontrado.
   * @returns 404: Usuário não encontrado.
   */
  execute(cpf: string) {
    const userExists = this.personRepository.getByCPF(cpf);

    if (!userExists) {
      return { status: 404, data: 'Usuário não encontrado.' };
    }

    return { status: 200, data: userExists };
  }
}

export { GetPersonByCPFUseCase };
