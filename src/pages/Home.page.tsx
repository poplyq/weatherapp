import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { WeatherModule } from '../modules/weather/WeatherModule'
import { SearchModule } from '../modules/search/SearchModule'
import './homepage.scss'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const longitude = searchParams.get('longitude')
  const latitude = searchParams.get('latitude')
  const title = searchParams.get('title')

  return (
    <div className='homePage'>
      <SearchModule />
      {latitude && longitude && title && (
        <WeatherModule longitude={longitude} latitude={latitude} title={title} />
      )}
    </div>
  )
}

export default HomePage
