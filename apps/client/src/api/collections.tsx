import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6060/api/collections',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => `collections`,
    }),
  }),
});

export const { useGetCollectionsQuery, useLazyGetCollectionsQuery } =
  collectionsApi;
