import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers';

export const collectionsTable = pgTable('collections', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clientId: uuid().notNull(),
  name: varchar({ length: 255 }).notNull(),
  ...timestamps,
});
