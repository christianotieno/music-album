/* eslint-disable */
import React, { useState } from 'react';

const Dropdown = (props) => {
  const { genres } = props;
  const [selectedGenre, setSelectedGenre] = useState('');
  return (
    <div>
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((
          genre,
        ) => (
          <option
            key={genre}
            value={genre}
          >
            {genre}
          </option>
        ))}
      </select>
      <p>{selectedGenre}</p>
    </div>
  );
};

export default Dropdown;
