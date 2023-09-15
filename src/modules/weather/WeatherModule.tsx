import React from 'react'
import { useGetForecastQuery } from '../../store/api/dataApi'
import { CurrentWeather } from '../../components/weather/currentweather/CurrentWeather'
import { dateTransform } from '../../helpers/functions/dateTransform'
import { ForecastTable } from '../../components/weather/forecast/ForecastTable'
import './weatherModule.scss'

interface WeatherModuleProps {
  longitude: string
  latitude: string
  title: string
}
export const WeatherModule = ({ longitude, latitude, title }: WeatherModuleProps) => {
  const { data } = useGetForecastQuery({ latitude, longitude })
  data && console.log(dateTransform(data.daily.time))
  console.log(data)

  return (
    <div className='weatherModule'>
      {data && <CurrentWeather currentWeather={data.current_weather} city={title} />}
      {data && (
        <ForecastTable
          days={dateTransform(data.daily.time)}
          dayTemperature={data.daily.temperature_2m_max}
          nightTemperature={data.daily.temperature_2m_min}
        />
      )}
    </div>
  )
}
