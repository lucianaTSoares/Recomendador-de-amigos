import { CreateRelationshipUseCase } from './createRelationship';
import {
  globalPersonRepository,
  globalRelationshipRepository,
} from '../../../globalInstances/index';

const createRelationship = new CreateRelationshipUseCase(
  globalRelationshipRepository,
  globalPersonRepository,
);

export { createRelationship };
