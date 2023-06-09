import { TUser } from '../../../types/index';
import { IPersonRepository } from '../repositories/IPersonRepositories';

class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  /**
   * Realiza a criação de um usuário.
   * @param {string} cpf String contendo o CPF do usuário.
   * @param {string} name String contendo o Nome do usuário.
   * @returns 200 e usuário criado.
   * @returns 400: Usuário cadastrado já existe.
   * @returns 400: CPF informado não possui 11 dígitos numéricos.
   */
  execute({ name, cpf }: TUser) {
    const user = { cpf, name };
    const userExists = this.personRepository.getByCPF(cpf);

    if (cpf.length !== 11) {
      return { status: 400, data: 'CPF inválido.' };
    }

    if (userExists) {
      return { status: 400, data: 'Usuário já cadastrado.' };
    }

    const userResponse = this.personRepository.create(user);

    if (!userResponse) {
      return { status: 500, data: 'Falha ao criar usuário.' };
    }

    return { status: 200, data: userResponse };
  }
}

export { CreatePersonUseCase };
