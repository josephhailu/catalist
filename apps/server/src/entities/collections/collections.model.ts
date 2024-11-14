import { createSelectSchema } from 'drizzle-zod';
import { collections } from '../../db/schema/collections';

export interface Message {
  text: string;
}
export type Collection = Pick<typeof collections, 'clientId' | 'name'>;
export const CollectionCollection = createSelectSchema(collections).pick({
  clientId: true,
  name: true,
});
