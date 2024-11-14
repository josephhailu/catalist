import { db } from '../../db/db';
import { collections } from '../../db/schema/collections';
import { Collection, Message, CollectionCollection } from './collections.model';

export const getPublicMessage = (): Message => {
  return {
    text: 'This is a public message.',
  };
};

export const getProtectedMessage = (): Message => {
  return {
    text: 'This is a protected message.',
  };
};

export const getAdminMessage = (): Message => {
  return {
    text: 'This is an admin message.',
  };
};

export const getCollections = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<(typeof CollectionCollection)[]> => {
  return db
    .select({
      clientId: collections.clientId,
      name: collections.name,
    })
    .from(collections)
    .limit(limit)
    .offset(offset);
};
