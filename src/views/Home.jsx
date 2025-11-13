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
        setMovies(data.Search.slice(0, 8)) // Limit to 8 results for clean grid
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
    <>
      {/* 🎬 Hero Cover Section */}
      <div style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1607083206173-3e5c3c7c3c3f?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>🎬 CineScope</h1>
          <p style={{ fontSize: '1.2rem' }}>Discover movies. Search by title. Explore cinema.</p>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <SearchBar onSearch={fetchMovies} />

      {/* ⏳ Loading / Error */}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {/* 🎞️ Movie Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
        gap: '20px',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
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
        Developed by Ntombifuthi • Powered by OMDb API
      </footer>
    </>
  )
}

export default Home

