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
      const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&s=${query}`)
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
      {/* 🎬 Hero Banner */}
      <div style={{
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        borderRadius: '0 0 20px 20px'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>🎬 CineScope</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Discover movies. Search by title. Explore cinema.
        </p>
      </div>

      {/* 🔍 Search Bar */}
      <SearchBar onSearch={fetchMovies} />

      {/* ⏳ Loading / Error */}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {/* 🎞️ Movie Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* 📝 Footer */}
        <footer style={{
  textAlign: 'center',
  padding: '20px',
  marginTop: '40px',
  fontSize: '0.9rem',
  color: '#666'
}}>
  Developed by Ntombifuthi Mashinini © NtombiCode Labs - 2025 | Powered by OMDb API
</footer>

    </div>
  )
}

export default Home

