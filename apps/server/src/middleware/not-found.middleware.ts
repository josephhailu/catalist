import { Request, Response } from 'express';

export const notFoundHandler = (_request: Request, response: Response) => {
  const message = 'Not Found';

  response.status(404).json({ message });
};
