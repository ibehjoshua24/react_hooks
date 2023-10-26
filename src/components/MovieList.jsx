import React from 'react'



function MovieList({movies}) {
  return (
    <div>
        {movies.map((movie, index) => (
            <MovieCard
             key={index}
             title={movie.title}
             description={movie.description}
             rating={movie.rating}
             url={movie.url}
             />
))}
    </div>
  )
}

export default MovieList