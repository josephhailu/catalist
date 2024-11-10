import express from 'express';
import { validateAccessToken } from '../../middleware/auth0.middleware';
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from './collections.service';

export const collectionsRouter = express.Router();

collectionsRouter.get('/public', (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

collectionsRouter.get('/protected', validateAccessToken, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

collectionsRouter.get('/admin', validateAccessToken, (req, res) => {
  const message = getAdminMessage();

  res.status(200).json(message);
});
