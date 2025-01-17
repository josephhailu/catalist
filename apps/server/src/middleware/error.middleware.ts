import { Request, Response } from 'express';
import {
  InvalidTokenError,
  UnauthorizedError,
} from 'express-oauth2-jwt-bearer';

export const errorHandler = (
  error: unknown,
  _request: Request,
  response: Response
) => {
  if (error instanceof InvalidTokenError) {
    const message = 'Bad credentials';

    response.status(error.status).json({ message });

    return;
  }

  if (error instanceof UnauthorizedError) {
    const message = 'Requires authentication';

    response.status(error.status).json({ message });

    return;
  }

  const status = 500;
  const message = 'Internal Server Error';

  response.status(status).json({ message });
};
