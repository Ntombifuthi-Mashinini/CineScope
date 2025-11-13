import { useState, useEffect } from 'react'
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
        const detailed = await Promise.all(
          data.Search.slice(0, 12).map(async (movie) => {
            const resDetail = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&i=${movie.imdbID}`)
            return await resDetail.json()
          })
        )
        setMovies(detailed)
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

  useEffect(() => {
    fetchMovies('Batman')
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0d0d0d',
      color: 'white',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(255,0,150,0.08), rgba(0,204,255,0.05), transparent)',
        zIndex: -1
      }} />

      <div style={{
        position: 'relative',
        height: '60vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            transform: 'scale(1)',
            animation: 'zoomSlow 30s ease-in-out infinite'
          }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-red-carpet-event-1600.mp4" type="video/mp4" />
        </video>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1
        }} />

        <div style={{
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center',
          animation: 'flicker 2s infinite'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '10px',
            letterSpacing: '2px',
            textShadow: '0 0 10px #fff, 0 0 20px #f0f, 0 0 30px #f0f'
          }}>
            🎬 CineScope
          </h1>
          <p style={{
            fontSize: '1.3rem',
            fontStyle: 'italic',
            textShadow: '0 0 5px #fff'
          }}>
            Discover movies. Search by title. Explore cinema.
          </p>
        </div>
      </div>

      <div style={{ padding: '30px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <SearchBar onSearch={fetchMovies} />
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        fontSize: '0.9rem',
        color: '#ccc',
        textShadow: '0 0 5px rgba(255,255,255,0.1)'
      }}>
        Developed by Ntombifuthi • Powered by OMDb API
      </footer>

      <style>
        {`
          @keyframes zoomSlow {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
        `}
      </style>
    </div>
  )
}

export default Home
