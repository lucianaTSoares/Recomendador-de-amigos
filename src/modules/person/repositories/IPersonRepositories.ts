import { TUser } from '../../../types/index';

interface IPersonRepository {
  create(user: TUser): TUser | undefined;
  getByCPF(cpf: string): TUser | undefined;
  getByCPFs(cpfs: string[]): TUser[];
  delete(): TUser[];
}

export { IPersonRepository };
