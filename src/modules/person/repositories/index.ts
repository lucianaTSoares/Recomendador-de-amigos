import { TUser } from '../../../types/index';
import { IPersonRepository } from './IPersonRepositories';

class PersonRepository implements IPersonRepository {
  private users: TUser[] = [];

  create(user: TUser): TUser | undefined {
    this.users.push(user);

    return this.getByCPF(user.cpf);
  }

  getByCPF(cpf: string): TUser | undefined {
    const userFound = this.users.find((user) => user.cpf === cpf);

    return userFound;
  }

  getByCPFs(cpfs: string[]): TUser[] {
    const usersFound = this.users.filter((person) => cpfs.includes(person.cpf));

    return usersFound;
  }

  delete(): TUser[] {
    this.users.splice(0, this.users.length);

    return this.users;
  }
}

export { PersonRepository };
