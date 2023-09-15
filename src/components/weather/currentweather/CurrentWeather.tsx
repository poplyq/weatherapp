import React from 'react'
import { currentWeather } from '../../../types/response/weatherDTO'
import './currentWeather.scss'
import { WeatherBlock } from '../weatherblock/WeatherBlock'
import TextComp from '../../common/TextComp'
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
          <TextComp text={city} />
        </div>
      </div>
    </div>
  )
}
