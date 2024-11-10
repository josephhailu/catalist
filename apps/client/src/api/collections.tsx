import { baseApi } from './api';

// Define a service using a base URL and expected endpoints
export const collectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: (body) => ({
        url: `/collections`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetCollectionsQuery, useLazyGetCollectionsQuery } =
  collectionsApi;
