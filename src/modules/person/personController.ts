import { Request, Response } from 'express';
import { createPersonUseCase, getPersonByCPFUseCase } from './useCases/index';

class PersonController {
  get(req: Request, res: Response) {
    const { CPF } = req.params;
    const person = getPersonByCPFUseCase.execute(CPF);

    return res.status(person.status).send(person.data);
  }

  post(req: Request, res: Response) {
    const { name, cpf } = req.body;
    const person = createPersonUseCase.execute({ name, cpf });

    return res.status(person.status).send(person.data);
  }
}

export { PersonController };
