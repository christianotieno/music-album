/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAlbums from '../actions/fetchAlbums';
import AlbumItem from '../components/AlbumItem';
import { clearAlbum, changeFilter } from '../actions/index';
import GenreFilter from '../components/GenreFilter';
import genres from '../helpers/genres';
import NavBar from '../components/NavBar';
import '../styles/album-list.css';

const AlbumList = ({
  albums, fetchAlbums, filter, clearAlbum, changeFilter,
}) => {
  useEffect(() => {
    fetchAlbums();
    clearAlbum();
  }, [fetchAlbums, clearAlbum]);

  const handleFilterChange = (filter) => changeFilter(filter);
  const filterId = Object.keys(genres).filter((key) => genres[key] === filter)[0];
  const filtered = filter === 'All' ? albums.albums : albums.albums.filter((album) => album.categoryId.includes(parseInt(filterId)));

  return (
    <div className="album-list">
      <NavBar />
      <div className="album-list-body">
        <div className="album-list-body-header">
          <h2>Top 100 Grossing &amp; Popular Albums</h2>
          <GenreFilter changeFilter={handleFilterChange} />
        </div>
        <div className="album-list-albums">
          {
          filtered.map((album) => (
            <AlbumItem
              album={album}
              key={album.id.toString()}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.instanceOf(Object).isRequired,
  fetchAlbums: PropTypes.func.isRequired,
  clearAlbum: PropTypes.func.isRequired,
};

const mapStateToProps = ({ albums, filter }) => ({
  albums,
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  clearAlbum: () => dispatch(clearAlbum()),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
