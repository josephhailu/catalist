import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { timestamps } from '../helpers';

export const collections = pgTable('collections', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clientId: uuid().notNull(),
  name: varchar({ length: 255 }).notNull(),
  ...timestamps,
});

const insertCollectionSchema = createInsertSchema(collections);

const selectCollectionSchema = createSelectSchema(collections);
