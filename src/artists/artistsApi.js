import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_url = 'https://spotify23.p.rapidapi.com'

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${Base_url}`,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '04a8943e77msh7bb40b259a56a14p1e28c1jsn493cb1b98f64');
      headers.set('x-rapidapi-host', 'spotify23.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({

    getAllArtists: builder.query({
      query: (ids) => ({
        url: '/artists/',
        params: { ids },
      }),
    })
  })
})

export const { useGetAllArtistsQuery } = artistApi