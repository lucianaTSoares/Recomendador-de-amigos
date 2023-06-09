import { Router } from 'express';
import { PersonController } from '../modules/person/personController';
import { RelationshipController } from '../modules/relationship/relationshipController';
import { RecommendationController } from '../modules/recommendation/recommendationController';
import { CleanDataController } from '../modules/clean/cleanDataController';
import { verifyPropertiesMiddleware } from '../middleware/index';

const router = Router();
const personController = new PersonController();
const relationshipController = new RelationshipController();
const recommendationController = new RecommendationController();
const cleanDataController = new CleanDataController();

/**
 * Rotas de `person`
 */
router.post('/person', verifyPropertiesMiddleware, personController.post);
router.get('/person/:CPF', personController.get);

/**
 * Rotas de `relacionamentos`
 */
router.post(
  '/relationship',
  verifyPropertiesMiddleware,
  relationshipController.post,
);

/**
 * Rotas de `recomendações`
 */
router.get('/recommendations/:CPF', recommendationController.get);

/**
 * Rotas para limpar os dados em memória
 */
router.delete('/clean', cleanDataController.delete);

export { router };
