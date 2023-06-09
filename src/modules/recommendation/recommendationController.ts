import { Request, Response } from 'express';
import { showRecommendationsUseCase } from './useCases/index';

class RecommendationController {
  get(req: Request, res: Response) {
    const { CPF } = req.params;
    const recommendations = showRecommendationsUseCase.execute(CPF);

    return res.status(recommendations.status).send(recommendations.data);
  }
}

export { RecommendationController };
