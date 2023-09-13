import { ComponentType, lazy } from 'react'
const HomePage = lazy(() => import('../pages/Home.page'))
const NotFoundPage = lazy(() => import('../pages/NotFound.page'))

import { HOME_ROUTE } from './variebles'

export interface RoutesType {
  path: string
  component: ComponentType
}
export const publickRoutes: RoutesType[] = [
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]
