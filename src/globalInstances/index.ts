import { PersonRepository } from '../modules/person/repositories/index';
import { RelationshipRepository } from '../modules/relationship/repositories/index';

const globalRelationshipRepository = new RelationshipRepository();
const globalPersonRepository = new PersonRepository();

export { globalRelationshipRepository, globalPersonRepository };
