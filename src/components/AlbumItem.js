import React from 'react';
import '../styles/album-item.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const AlbumItem = (props) => {
  const { album } = props;
  const showAlbum = (albumName) => props.history.push(`/album/${albumName}`);
  return (
    <div
      className="album-item"
      onClick={() => showAlbum(album.title.label)}
      onKeyDown={() => showAlbum(album.title.label)}
      role="button"
      tabIndex={0}
    >
      <img src={album['im:image'][2].label} alt={album.title.label} />
      <div className="album-item-body">
        <h3>{album.title.label}</h3>
        <p>
          Date released:
          {' '}
          {album['im:releaseDate'].attributes.label}
        </p>
      </div>
    </div>
  );
};
AlbumItem.propTypes = {
  album: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
export default withRouter(AlbumItem);
