function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: '200px',
        height: '400px',
        margin: '10px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
        alt={movie.Title}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0 0 5px', fontSize: '1.1rem' }}>{movie.Title}</h3>
        <p style={{ margin: '0', color: '#555' }}>{movie.Year}</p>
        <p style={{ margin: '0', color: '#888' }}>{movie.Type}</p>
      </div>
    </div>
  )
}

export default MovieCard
