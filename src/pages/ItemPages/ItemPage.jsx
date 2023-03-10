import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getItemsById } from '../../utils';
import imagen from '../../assets/items/dc-arrow.jpg'

export const ItemPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const item = useMemo(() => getItemsById(id), [id])

  const handleNavigateBack = () => {
    navigate(-1)
  }

  if(!item){
    return <Navigate to="/getitems"/>
  }

  return (
    <>
      <div className='row mt-5'>
        <div className="col-4"> 
          <img src={imagen} alt="superhero" className="img-thumbnail animate__animated animate__fadeIn" />
        </div>
        <div className="col-8">
          <h3>{item.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {item.alter_ego} </li>
            <li className="list-group-item"> <b>Publisher:</b> {item.category} </li>
            <li className="list-group-item"> <b>first appearance:</b> {item.first_appearance} </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{item.characters}</p>
          <button className="btn btn-outline-primary" onClick={ handleNavigateBack }>Regresar</button>
        </div>
      </div>
    </>
  )
}
