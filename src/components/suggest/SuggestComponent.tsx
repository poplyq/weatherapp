import React from 'react'
import './suggestComponent.scss'
import { useSearchParams } from 'react-router-dom'

interface SuggestComponentProps {
  title: string
  longitude: string | undefined
  latitude: string | undefined
  close(): void
}
export const SuggestComponent = ({ title, longitude, latitude, close }: SuggestComponentProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = () => {
    searchParams.set('title', `${title}`)
    searchParams.set('longitude', `${longitude}`)
    searchParams.set('latitude', `${latitude}`)
    setSearchParams(searchParams)
    close()
  }
  return (
    <p className='suggestTitle' onClick={handleClick}>
      {title}
    </p>
  )
}
