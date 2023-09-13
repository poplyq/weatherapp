import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { SuggestDTO } from '../../types/response/suggestDTO'
import { SuggestData } from '../../types/suggest/suggest'

export const suggestApi = createApi({
  reducerPath: 'suggestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/',
    prepareHeaders: (headers) => {
      headers.set('Content', 'application/json')
      headers.set('Accept', 'application/json')
      headers.set('Authorization', 'Token 85f4964f5ab9830e8091e07747703446fbcf3496')
      return headers
    },
  }),
  tagTypes: ['Suggest'],
  endpoints: (build) => ({
    getSuggest: build.mutation<SuggestData[], { query: string; locations: { country: string }[] }>({
      query(data) {
        return {
          url: 'suggest/address',
          method: 'POST',
          body: data,
        }
      },
      transformResponse: (response: SuggestDTO): SuggestData[] => response.suggestions,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (e) {
          console.log(e)
        }
      },
    }),
  }),
})

export const { useGetSuggestMutation } = suggestApi
