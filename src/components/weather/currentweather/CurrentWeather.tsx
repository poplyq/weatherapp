import React from 'react'
import { currentWeather } from '../../../types/response/weatherDTO'
import './currentWeather.scss'
import { WeatherBlock } from '../weatherblock/WeatherBlock'
interface CurrentWeatherProps {
  currentWeather: currentWeather
  city: string
}
export const CurrentWeather = ({ currentWeather, city }: CurrentWeatherProps) => {
  return (
    <div className='currentContainer'>
      <div className={currentWeather.is_day ? 'currentDay' : 'currentNight'}>
        <div className='currentInfoBlock'>
          <p className='currentTemperature'> {currentWeather.temperature} °C</p>
          <WeatherBlock weathercode={currentWeather.weathercode} />
          <p className='currentCity'>{city}</p>
        </div>
      </div>
    </div>
  )
}
