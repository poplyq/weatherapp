import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { WeatherModule } from '../modules/weather/WeatherModule'

const HomePage = () => {
  const [searchParams] = useSearchParams()

  const longitude = searchParams.get('longitude')
  const latitude = searchParams.get('latitude')
  const title = searchParams.get('title')
  console.log(longitude, latitude, title)
  if (!longitude && !latitude) return null
  return (
    <div>
      {latitude && longitude && title && (
        <WeatherModule longitude={longitude} latitude={latitude} title={title} />
      )}
    </div>
  )
}

export default HomePage
