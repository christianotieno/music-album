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
      onClick={() => showAlbum(album.title)}
      onKeyDown={() => showAlbum(album.title)}
      role="button"
      tabIndex={0}
    >
      <img src={album.image} className="album-item-img" alt={album.title} />
      <div className="album-item-body">
        <h3>{album.title}</h3>
        <p>
          Date released:
          {' '}
          {album.releaseDate}
        </p>
      </div>
      <div className="genre">
        <span className="album-item-genre">{album.categoryName}</span>
      </div>
    </div>
  );
};
AlbumItem.propTypes = {
  album: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
export default withRouter(AlbumItem);
