import React from 'react'
import { publickRoutes } from './routes'
import Router from './Router'

const AppRouter = () => {
  return <Router routes={publickRoutes} />
}

export default AppRouter
