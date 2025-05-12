import React from 'react';
import axios from 'axios';

function App() {
  // Example of using axios to fetch data
  React.useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data => {
      console.log(data);
      const value = data[0].name;
      })
      .catch(error => {
      console.error('Error fetching data:', error);
      });
  }, []);
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
