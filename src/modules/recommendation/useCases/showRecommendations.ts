import { IPersonRepository } from '../../person/repositories/IPersonRepositories';
import { IRelationshipRepository } from '../../relationship/repositories/IRelationshipRepositories';

type CountType = {
  [key: string]: number;
};

class ShowRecommendationsUseCase {
  constructor(
    private relationshipRepository: IRelationshipRepository,
    private personRepository: IPersonRepository,
  ) {}

  /**
   * Busca os amigos recomendados de um usuário.
   * @param {string} req.params.cpf String contendo o CPF do usuário.
   * @returns 404: Usuário não encontrado.
   * @returns 400: CPF informado não possui 11 dígitos numéricos.
   */
  execute(cpf: string) {
    const friendsCPF: string[] = [];
    const userExists = this.personRepository.getByCPF(cpf);

    if (cpf.length !== 11) {
      return { status: 400, data: 'CPF inválido.' };
    }

    if (!userExists) {
      return { status: 404, data: 'Usuário não encontrado.' };
    }

    const receivedCPFFriends = this.relationshipRepository.findByCPF(cpf);

    const allRelationships = this.relationshipRepository.getAll();

    receivedCPFFriends.forEach((friend) => {
      const friendCPF = friend.cpf1 === cpf ? friend.cpf2 : friend.cpf1;
      const friendsOfFriend = allRelationships.filter((relation) => {
        return (
          [relation.cpf1, relation.cpf2].includes(friendCPF) &&
          ![relation.cpf1, relation.cpf2].includes(cpf)
        );
      });

      friendsOfFriend.forEach((friendOfFriend) => {
        const friendOfFriendCPF =
          friendOfFriend.cpf1 === friendCPF
            ? friendOfFriend.cpf2
            : friendOfFriend.cpf1;

        friendsCPF.push(friendOfFriendCPF);
      });
    });

    const friendsOccurrence = friendsCPF.reduce((count: CountType, item) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    }, {});

    const recommendedFriends = Object.keys(friendsOccurrence).sort(
      (a, b) => friendsOccurrence[b] - friendsOccurrence[a],
    );

    return { status: 200, data: recommendedFriends };
  }
}

export { ShowRecommendationsUseCase };
