import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_url = 'https://api.spotify.com/v1'

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${Base_url}`,
    prepareHeaders: (headers, { getState }) => {
      const token = '1POdFZRZbvb...qqillRxMr2z';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({

    getAllArtists: builder.query({
      query: () => ({
        url: '/artists',
        method: 'GET'
      })
    })
  })
})

export const { useGetAllArtistsQuery } = artistApi