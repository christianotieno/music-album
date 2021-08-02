/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAlbums from '../actions/fetchAlbums';
import AlbumItem from '../components/AlbumItem';
import Dropdown from '../helpers/Dropdown';
import genre from '../helpers/genre';
import { clearAlbum } from '../actions/index';
import '../styles/album-list.css';

const AlbumList = ({ albums, fetchAlbums }) => {
  useEffect(() => {
    fetchAlbums();
    clearAlbum();
  }, [fetchAlbums, clearAlbum]);

  const groups = genre(albums.albums);
  return (
    <div className="album-list">
      <h1>Album List</h1>
      <Dropdown genres={groups} />
      <div className="album-list-body">
        {
          albums.albums.map((album) => (
            <AlbumItem
              album={album}
              key={album.id.attributes['im:id']}
            />
          ))
        }
      </div>
    </div>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(Object).isRequired,
  fetchAlbums: PropTypes.func.isRequired,
  clearAlbum: PropTypes.func.isRequired,
};

const mapStateToProps = ({ albums }) => ({
  albums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  clearAlbum: () => dispatch(clearAlbum()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
