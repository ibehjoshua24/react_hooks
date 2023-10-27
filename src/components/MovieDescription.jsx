import React from 'react'
import { Link,useParams } from 'react-router-dom'



function MovieDescription({trailer,title,year}) {
  //const {id} = useParams();
 // const movie = movie.find((m) => m.id === parseInt(id))

 
  return (
    <>
    <div>
      <Link to= "/App">Back to Home</Link>
      <div>
        <iframe src={trailer}/>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
    </>
        
  )
}

export default MovieDescription