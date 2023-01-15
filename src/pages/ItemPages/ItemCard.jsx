import React from 'react'
import { Link } from 'react-router-dom'
import imagen from '../../assets/items/dc-arrow.jpg'

const CharactersByHero= ({alter_ego, characters}) => {
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>
}

export const ItemCard = ( item ) => { 
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={imagen} className='card-img' alt={item.superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-tittle">{item.superhero}</h5>
                        <h5 className="card-text">{item.alter_ego}</h5>
                        <CharactersByHero characters={item.characters} alter_ego={item.alter_ego}/>
                        <p>{item.characters}</p>
                        <p className="card-text">
                            <small className="text-muted">{item.first_appearance}</small>
                        </p>
                        <Link to={`/items/${item.id}`}>
                            Más..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
