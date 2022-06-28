import React from 'react';

type Props = {};

function Search({}: Props) {
  return (
    <div>
      <label htmlFor="hero-name">Search</label>
      <input id="hero-name" placeholder="Type a hero name" />
      <button>Submit</button>
    </div>
  );
}

export default Search;
