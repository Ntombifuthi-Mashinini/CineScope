import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchMovies(query) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`)
      const data = await res.json()
      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setError(data.Error)
        setMovies([])
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>CineScope</h1>
      <SearchBar onSearch={fetchMovies} />
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
