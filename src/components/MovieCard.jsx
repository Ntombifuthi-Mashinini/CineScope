function MovieCard({ movie }) {
  return (
    <div style={{ width: '200px', margin: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <div style={{ padding: '10px' }}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
      </div>
    </div>
  )
}

export default MovieCard
