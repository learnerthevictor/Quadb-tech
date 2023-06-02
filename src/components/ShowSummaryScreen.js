import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowSummaryScreen() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update summary state with fetched show summary
        setSummary(data.summary);
      })
      .catch((error) => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
}

export default ShowSummaryScreen;