import React from 'react';
import axios from 'axios';

function App() {
  // Example of using axios to fetch data
  React.useEffect(() => {
    axios.get('https://api.restful-api.dev/objects')
      .then(response => {
        console.log(response.data);
        const value = response.data[0].name;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
