import React from 'react';

import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
    return results.map((images) => (
      <>
        <img
          src={images} 
          alt={images} 
          className="images" 
        />
      </>
    ));
  }
}

export default SearchResults;