import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { weatherDTO } from '../../types/response/weatherDTO'
import { weatherRequest } from '../../types/request/weatherRequest'

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.open-meteo.com/v1/',
    prepareHeaders: (headers) => {
      return headers
    },
  }),
  tagTypes: ['Data'],
  endpoints: (build) => ({
    getForecast: build.query<weatherDTO, weatherRequest>({
      query(req) {
        const { latitude, longitude } = req
        return {
          url: 'forecast',
          params: {
            latitude,
            longitude,
            daily: 'temperature_2m_max,temperature_2m_min',
            current_weather: 'true',
            timezone: 'auto',
            forecast_days: 7,
          },
        }
      },
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

export const { useGetForecastQuery } = dataApi
