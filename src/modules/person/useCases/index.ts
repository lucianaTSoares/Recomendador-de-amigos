import { globalPersonRepository } from '../../../globalInstances/index';
import { CreatePersonUseCase } from './createPerson';
import { GetPersonByCPFUseCase } from './getPersonByCPF';

const createPersonUseCase = new CreatePersonUseCase(globalPersonRepository);
const getPersonByCPFUseCase = new GetPersonByCPFUseCase(globalPersonRepository);

export { createPersonUseCase, getPersonByCPFUseCase };
