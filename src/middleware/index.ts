import { NextFunction, Request, Response } from 'express';

const verifyPropertiesMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const bodyProperties = Object.keys(req.body);
  const url = req.url;
  let requiredProperties: string[] = [];

  if (url.includes('/person')) {
    requiredProperties.push('name', 'cpf');
  }

  if (url.includes('/relationship')) {
    requiredProperties.push('cpf1', 'cpf2');
  }

  const isMissingSomeProperty = requiredProperties.some(
    (property) => !bodyProperties.includes(property),
  );

  if (isMissingSomeProperty) {
    return res.status(400).send('Propriedades faltando no body da requisição.');
  }

  next();
};

export { verifyPropertiesMiddleware };
