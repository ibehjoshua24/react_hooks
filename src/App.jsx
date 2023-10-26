import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'




const App = () => {
 
  
  // const [moviesData, setMoviesData] = useState("")

  const [movies, setMovies] = useState([
    {
      title:"spiderman",
      year:"2020",
      url:"https://th.bing.com/th/id/OIP.JA1dhiMLBvfNmdLx4HLlwQHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=1.3",
      rating:"6.5",
    },
    {
      title:"superman",
      year:"2020",
      url:"https://th.bing.com/th/id/OIP.gTOx6T1Z6Nj2Tbgmgmq5bAHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating:"6.5",
    },
    {
      title:"batman",
      year:"2020",
      url:"https://th.bing.com/th/id/OIP.Ixx7-LdFLFBQtGiPspXtlgHaLH?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating:"6.5",
    },
    {
      title:"the flash",
      year:"2020",
      url:"https://th.bing.com/th/id/OIP.5O77pekbw3rjWKj32UmISAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating:"6.5",
    },
    {
      title:"x men",
      year:"2020",
      url:"https://th.bing.com/th/id/OIP.RjrKWmKK091MsPy9vaW_cAHaK4?pid=ImgDet&rs=1",
      rating:"6.5"
    },
    {
      title:"game of thrones",
      year:2020,
      url:"https://lh3.googleusercontent.com/proxy/juo9r1yMjCRhwInXlECHuOHA2cwd86HW94OewnRYcXijzQbIn6EDPhvAfLtLy-f7lFjbtAav79PtCb9UlKKqW9Znw25pcMfv2z9n_QZEUBKNDpykOZ8Vq0fuC4AUngGw=s0-d",
      rating:6.5,
    },
    {
      title:"the mechanic",
      year:2020,
      url:"https://th.bing.com/th/id/R.bfe683b8573fb5bbf5104bfda82be1d2?rik=ATQN%2frpSSv7S3w&riu=http%3a%2f%2fpics.filmaffinity.com%2fThe_Mechanic-343996468-large.jpg&ehk=ARedjQ2YgMSrRCEQmUwMGwfakqhds0spIPchof4rui8%3d&risl=&pid=ImgRaw&r=0",
      rating:6.5
    }
  ])
  

  // const fetchData = async() => {
  //   const response = await fetch("http://www.omdbapi.com?apikey=c032e2d7")
  

  // const data = await response.json()
  // setMovies(data.search)
  // setMoviesData(data.search)
  // }

  // useEffect(() => (
  //   fetchData()
  // ), [])

  const [searchText, setSearchText] = useState("")



    const filteredMovies = movies?.filter(
      (movie) => (
      movie.title.toLowerCase().includes(searchText.toLowerCase()) 
    ));

    // const handleSearch = (event) => {
    //   event.preventDefault()
    //   setMovies(filteredMovies)
    // }

  // const addMovie = (newMovie) => {
  //   setMovies([...movies, newMovie])
  // };
    

  return (
    <>
    <div className='form'>
      <form>
        <input 
        type="text" 
        placeholder='Search...'
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        />
        {/* <button type='type' onClick={handleSearch}>search</button> */}
      </form>
    </div>
    <div className='first'>
      {filteredMovies.map(({id, title, year, rating, url}) => {
        return (
          <MovieCard
          key={id}
          title={title}
          year={year}
          rating={rating}
          url={url}
          />
        )
      })}
    </div>
    </>
  )
      }

export default App
