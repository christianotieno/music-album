import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TrackItem = (props) => {
  const { track } = props;
  return (
    <div className="album-item">
      <img src={track.album.images[1].url} alt={track.name} className="album-item-img" />
      <div className="album-item-body">
        <h3>{track.name}</h3>
        <p>
          This track features in number
          {' '}
          {track.track_number}
          {' '}
          in the album.
        </p>
        <p>
          Date released:
          {' '}
          {track.album.release_date}
        </p>
        <p>
          By:
          {' '}
          {track.album.artists[0].name}
        </p>
        <p>
          {track.popularity > 0 ? (
            <p className="rating">
              popularity score: &nbsp;
              <FontAwesomeIcon
                icon={faStar}
                className="star-icon"
              />
              {track.popularity}
            </p>
          ) : (
            <p className="rating">Upcoming</p>
          )}
        </p>
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  track: PropTypes.instanceOf(Object).isRequired,
};
export default TrackItem;
