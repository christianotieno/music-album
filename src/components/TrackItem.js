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
          This track is number {track.track_number} in the album.
        </h4>
        <h5>
          Artists: {track.album.artists[0].name}
        </h5>
        <p>
          It has a popularity score of {track.popularity}.
        </p>
      </div>
    </div>
  );
};

export default TrackItem;
