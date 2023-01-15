import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ItemPage, SearchItemPage, GetItemsPage } from '../../pages/ItemPages'
import { Navbar } from '../ui/Navbar'

export const ItemRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="items" element={< GetItemsPage /> } />
                <Route path="items/:id"  element={< ItemPage /> } /> 
                <Route path="search"  element={< SearchItemPage /> } /> 
            </Routes>
        </div>
    </>
  )
}
