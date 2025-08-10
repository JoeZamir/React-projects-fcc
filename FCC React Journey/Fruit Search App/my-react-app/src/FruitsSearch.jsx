import { useState, useEffect } from "react";

export function FruitsSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent form from reloading the page
  }

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
          const data = await response.json();
          setResults(data.map(fruit => fruit.name));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, 700);

    return () => clearTimeout(timeoutId); // cleanup on query change
  }, [query]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div id="results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <p key={index} className="result-item">{item}</p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
