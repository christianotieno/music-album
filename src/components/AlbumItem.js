/* eslint-disable */
import React from 'react';
import '../styles/album-item.css';
import { withRouter } from 'react-router';

const AlbumItem = (props) => {
  const { album } = props;
  const showAlbum = (albumName) => props.history.push(`/album/${albumName}`);
  console.log('albumitem');

  return (
    <div
      className="album-item"
      onClick={() => {
        showAlbum(album.title.label);
      }}
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

export default withRouter(AlbumItem);
