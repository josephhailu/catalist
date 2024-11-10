import {
  drizzle,
  NodePgClient,
  NodePgDatabase,
} from 'drizzle-orm/node-postgres';

let dbInstance: NodePgDatabase<Record<string, never>> & {
  $client: NodePgClient;
};

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL');
}

function singleton() {
  if (!dbInstance) {
    dbInstance = drizzle({
      connection: process.env.DATABASE_URL,
      casing: 'snake_case',
    });
  }

  return dbInstance;
}

export const db = singleton();
