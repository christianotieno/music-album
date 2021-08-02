/* eslint-disable */
import React from 'react';

const TrackItem = (props) => {
  const { track } = props;
  return (
    <div className="album-item">
      <img src={track.album.images[1].url} alt={track.name} className="album-item-img" />
      <div className="album-item-body">
        <h3>{track.name}</h3>
        <h4>
          Track number:
          {' '}
          {track.track_number}
        </h4>
        <h5>
          By:
          {' '}
          {track.album.artists[0].name}
        </h5>
        <p>
          Popularity Score:
          {' '}
          {track.popularity}
        </p>
      </div>
    </div>
  );
};

export default TrackItem;
