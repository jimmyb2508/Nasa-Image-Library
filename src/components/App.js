import React, { useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import '../styles/App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  searchResults.map((e) => console.log(e))

  return (
    <div className="App">
      <img 
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
      className="asset" 
      alt="asset" />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults}/>
    </div>
  );
};

export default App;
