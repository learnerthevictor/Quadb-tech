import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowListScreen() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        // Update shows state with fetched data
        setShows(data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      {shows.map((show) => (
        <div key={show.id}>
          <h3>{show.name}</h3>
          {/* Render other show details */}
          <Link to={`/show/${show.id}`}>View Summary</Link>
        </div>
      ))}
    </div>
  );
}

export default ShowListScreen;