import React from 'react'
import { publickRoutes } from './routes'
import Router from './Router'

const AppRouter = () => {
  return (
    <div>
      <Router routes={publickRoutes} />
    </div>
  )
}

export default AppRouter
