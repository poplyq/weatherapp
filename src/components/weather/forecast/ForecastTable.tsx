import React from 'react'
import './forecastTable.scss'
import TextComp from '../../common/TextComp'

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
          <TextComp text={day} />
          <TextComp text={`${dayTemperature[index]} °C`} />
          <TextComp text={`${nightTemperature[index]} °C`} />
        </div>
      ))}
    </div>
  )
}
