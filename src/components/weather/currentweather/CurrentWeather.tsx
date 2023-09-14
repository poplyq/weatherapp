import React from 'react'
import { currentWeather } from '../../../types/response/weatherDTO'
import './currentWeather.scss'
import { WeatherBlock } from '../weatherblock/WeatherBlock'
interface CurrentWeatherProps {
  currentWeather: currentWeather
}
export const CurrentWeather = ({ currentWeather }: CurrentWeatherProps) => {
  return (
    <div className='currentContainer'>
      <div className={currentWeather.is_day ? 'currentDay' : 'currentNight'}>
        <WeatherBlock weathercode={currentWeather.weathercode} />
        <p> Температура {currentWeather.temperature} С</p>
        <p> скорость ветра {currentWeather.windspeed} м/с</p>
      </div>
    </div>
  )
}
