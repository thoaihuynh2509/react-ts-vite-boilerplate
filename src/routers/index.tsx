import React from 'react'
import { Routes, Route } from 'react-router'

import ErrorBoundary from '../components/error-boundary'
import HomePage from '../pages/home'

import { routePath } from './config'

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<HomePage />} errorElement={<ErrorBoundary />} path={routePath.Home} />
      <Route element={<div>404 Page not found</div>} path="*" />
    </Routes>
  )
}

export default MainRouter
