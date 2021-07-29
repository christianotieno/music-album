/* eslint-disable */
import React from 'react';
import '../styles/album-item.css';

const AlbumItem = ({ album }) => (
  <div className="album-item">
    <img src={album['im:image'][2].label} alt={album.title.label} />
    <div className="album-item-body">
      <h3>{album.title.label}</h3>
      <p>
        Releases Date:
        {' '}
        {album['im:releaseDate'].attributes.label}
      </p>
    </div>
  </div>
);

export default AlbumItem;
