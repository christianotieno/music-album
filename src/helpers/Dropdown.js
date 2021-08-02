import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const { genres } = props;
  const [selectedGenre, setSelectedGenre] = useState('');
  return (
    <div className="genre-list">
      <select
        className="album-item-genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
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

Dropdown.propTypes = {
  genres: PropTypes.instanceOf(Array).isRequired,
};
export default Dropdown;
