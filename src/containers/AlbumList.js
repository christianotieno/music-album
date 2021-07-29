/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchAlbums from '../actions/fetchAlbums';
import AlbumItem from '../components/AlbumItem';
import '../styles/album-list.css';

const AlbumList = ({ albums, fetchAlbums }) => {
  useEffect(() => { fetchAlbums(); }, [fetchAlbums]);

  return (
    <div className="album-list">
      <h1>Album List</h1>
      <div className="album-list-body">
        {console.log(albums)}
        {
          albums.albums.map((album) => (
            <AlbumItem
              album={album}
              key={album.id['im:id']}
            />
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ albums }) => ({
  albums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
