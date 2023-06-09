import { Request, Response } from 'express';
import { cleanAllMemoryDataUseCase } from './useCases/index';

class CleanDataController {
  delete(req: Request, res: Response) {
    const cleanResponse = cleanAllMemoryDataUseCase.execute();
    return res.status(cleanResponse.status).send(cleanResponse.data);
  }
}

export { CleanDataController };
