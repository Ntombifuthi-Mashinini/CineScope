import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        style={{
          padding: '10px 14px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: 'none',
          outline: 'none',
          width: '60%',
          backgroundColor: '#222',
          color: '#fff',
          boxShadow: '0 0 5px rgba(255,255,255,0.1)'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: 'none',
          background: 'linear-gradient(45deg, #ff0066, #6600ff)',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(255,0,150,0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 0 15px rgba(255,0,150,0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 0 10px rgba(255,0,150,0.3)'
        }}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
