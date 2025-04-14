import { useState, useEffect } from 'react';

/**
 * 
 * @returns Debounce
Debouncing ensures that a function is only called after a specified delay has passed since the last time it was invoked. 
If the function is called again within that delay period, the timer is reset, and the delay starts over. 
This is useful for scenarios where you want to wait for a user to stop typing or interacting before making an API call. 
Use case:
Search input: When a user types in a search box, you can use debouncing to delay the API call until 
they have finished typing, preventing unnecessary requests and reducing server load.
 */
function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        fetch(`https://api.example.com/search?q=${searchTerm}`)
          .then(response => response.json())
          .then(data => setResults(data));
      } else {
        setResults([]);
      }
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
