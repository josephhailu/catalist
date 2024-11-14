import express from 'express';
import { validateAccessToken } from '../../middleware/auth0.middleware';
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from './collections.service';

export const collectionsRouter = express.Router();

collectionsRouter.get('/', validateAccessToken, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

collectionsRouter.post('/', validateAccessToken, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});
