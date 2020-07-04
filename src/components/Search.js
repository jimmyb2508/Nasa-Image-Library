import React, { useState } from 'react';
import getImages from '../requests/getImages';

import '../styles/Search.css';

const Search = ( { setSearchResults} ) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    getImages(value);
    setSearchResults(await getImages(value));
  };

  return (
    <>
    <p>Explore image library</p>
      <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search"
        className="search-input"
        onChange={(e) => setValue(e.target.value)} />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;