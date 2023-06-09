import { Request, Response } from 'express';
import { createRelationship } from './useCases/index';

class RelationshipController {
  post(req: Request, res: Response) {
    const { cpf1, cpf2 } = req.body;

    const relationship = createRelationship.execute({ cpf1, cpf2 });

    return res.status(relationship.status).send(relationship.data);
  }
}

export { RelationshipController };
