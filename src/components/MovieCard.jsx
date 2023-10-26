import React from 'react'
import "./MovieCard.css"
function MovieCard({title, year, rating, url}) {
  return (
    <div className='container'>
        <img src={url} alt="" />
        <h2>{title}</h2>
        <p> {year}</p>
        <p>Rating:{rating}</p>
    </div>
  )
}

export default MovieCard