import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    function loadFavorites() {
      const saved = []
      for (let key in localStorage) {
        if (key.startsWith('tt')) {
          try {
            const movie = JSON.parse(localStorage.getItem(key))
            saved.push(movie)
          } catch (err) {
            console.warn(`Failed to parse movie from localStorage key: ${key}`, err)
          }
        }
      }
      setFavorites(saved)
    }

    loadFavorites()
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0d0d0d',
      color: 'white',
      padding: '40px 20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '30px',
        textShadow: '0 0 10px #fff, 0 0 20px #f0f'
      }}>
        ★ Your Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#ccc' }}>
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
