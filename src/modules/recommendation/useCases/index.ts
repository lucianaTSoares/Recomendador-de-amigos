import {
  globalPersonRepository,
  globalRelationshipRepository,
} from '../../../globalInstances/index';
import { ShowRecommendationsUseCase } from './showRecommendations';

const showRecommendationsUseCase = new ShowRecommendationsUseCase(
  globalRelationshipRepository,
  globalPersonRepository,
);

export { showRecommendationsUseCase };
