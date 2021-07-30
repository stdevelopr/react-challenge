import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tvmazeApi = createApi({
  reducerPath: 'tvmazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com' }),
  endpoints: (builder) => ({
    getSearchShow: builder.query({
      query: (name) => `search/shows?q=${name}`,
    }),
    getShowEpisodes: builder.query({
      query: (id) => `/shows/${id}/episodes`,
    }),
    getEpisodeDetails: builder.query({
      query: (id) => `/episodes/${id}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetSearchShowQuery, useGetShowEpisodesQuery, useGetEpisodeDetailsQuery } = tvmazeApi
