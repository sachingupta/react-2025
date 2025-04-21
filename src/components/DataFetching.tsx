import { useState, useEffect } from 'react';

export function DataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError(e);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const toDos = data.map((todo) => {
    return <li><ToDo todo={todo}/></li>
  })

  const apiResponseString = JSON.stringify(data, null, 2);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul> {toDos}</ul>
    </div>
  );
}

function ToDo({todo}) {
    return (<div><input type='checkbox' value={todo.completed} /> {todo.title}</div>);
}
