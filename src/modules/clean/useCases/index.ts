import {
  globalPersonRepository,
  globalRelationshipRepository,
} from '../../../globalInstances/index';
import { CleanAllMemoryDataUseCase } from './cleanAllMemoryData';

const cleanAllMemoryDataUseCase = new CleanAllMemoryDataUseCase(
  globalPersonRepository,
  globalRelationshipRepository,
);

export { cleanAllMemoryDataUseCase };
