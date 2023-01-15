import React, { useMemo } from 'react'
 
import { getItemsByCategory } from '../../utils/getItemsByCategory'
import { ItemCard } from './ItemCard' 

export const ItemList = ({ category }) => {
  
  const items = useMemo(() => getItemsByCategory(category), [category])

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
          items.map( item => ( 
              <ItemCard key={item.id} { ...item }/> 
          ))  
        }
    </div>
  )
}
