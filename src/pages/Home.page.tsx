import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WeatherModule } from '../modules/weather/WeatherModule'
import { SearchModule } from '../modules/search/SearchModule'
import './homepage.scss'

const HomePage = () => {
  const [searchParams] = useSearchParams()

  const [longitude, setLongitude] = useState<string | null>(searchParams.get('longitude'))
  const [latitude, setLatitude] = useState<string | null>(searchParams.get('latitude'))
  const title = searchParams.get('title')
  if (!longitude && !latitude) {
    setLatitude('52.52')
    setLongitude('13.419998')
  }
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
