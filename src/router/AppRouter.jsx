import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ItemRoutes } from '../components/router' 
import { LoginPage } from '../pages/'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <> 
        <Routes>
            <Route path="/*" element={
              <PrivateRoute>
                <ItemRoutes/>
              </PrivateRoute>
            }/> 
            <Route path="login/*" element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage/>}/>
                </Routes>
              </PublicRoute>
            }/> 
        </Routes>
    </>
  )
}
 