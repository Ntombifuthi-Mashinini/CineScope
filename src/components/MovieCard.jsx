function MovieCard({ movie }) {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '10px',
      padding: '12px',
      textAlign: 'center',
      boxShadow: '0 0 12px rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)'
      e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.1)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'
      e.currentTarget.style.boxShadow = '0 0 12px rgba(255,255,255,0.05)'
    }}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
        alt={movie.Title}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '6px',
          marginBottom: '12px',
          boxShadow: '0 0 8px rgba(255,255,255,0.1)'
        }}
      />
      <h3 style={{
        fontSize: '1.1rem',
        marginBottom: '6px',
        color: '#fff',
        textShadow: '0 0 6px rgba(255,255,255,0.2)'
      }}>
        {movie.Title}
      </h3>
      <p style={{
        fontSize: '0.9rem',
        color: '#bbb',
        marginBottom: '4px'
      }}>
        {movie.Year}
      </p>
      <p style={{
        fontSize: '0.8rem',
        color: '#888'
      }}>
        {movie.Type?.toUpperCase()}
      </p>
    </div>
  )
}

export default MovieCard
