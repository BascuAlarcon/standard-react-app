import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForm' 
import { getItemsByName } from '../../utils/getItemsByName'
import { ItemCard } from './ItemCard'


export const SearchItemPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation(); 

  const { q = ''} = queryString.parse( location.search )
  const items = getItemsByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && items.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  }) 
  
  const handleSearchSubmit = (event) => { 
    event.preventDefault()  
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1><hr />
      <div className="row">
        
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder='Search a item' 
              name='searchText' 
              autoComplete='off' 
              className='form-control'
              value={ searchText } 
              onChange={onInputChange} />  

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr /> 

          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
            Search a item
          </div>
          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
            There is not result for <b>{q}</b>
          </div>

          {
            items.map(item => (<ItemCard key={item.id}{...item}/>))
          }
        </div>
      </div>
    </>
  )
}
