import React from 'react'
import './forecastTable.scss'

interface ForecastTableProps {
  days: string[]
  dayTemperature: number[]
  nightTemperature: number[]
}
export const ForecastTable = ({ days, dayTemperature, nightTemperature }: ForecastTableProps) => {
  return (
    <div className='forecastTable'>
      {days.map((day, index) => (
        <div key={day}>
          <p className='forecastElement'>{day}</p>
          <p className='forecastElement'>{dayTemperature[index]} °C</p>
          <p className='forecastElement'>{nightTemperature[index]} °C</p>
        </div>
      ))}
    </div>
  )
}
