import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Search
      </button>
    </form>
  )
}

export default SearchBar
