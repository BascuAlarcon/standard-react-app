import React from 'react'
import { ItemList } from './ItemList'

export const GetItemsPage = () => {
  return (
    <>
      <h1>Items</h1>
      <hr />

      <ItemList category='DC Comics' />
    </>
  )
}
