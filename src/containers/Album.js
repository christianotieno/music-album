import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchAlbum from '../actions/fetchAlbum';

const Album = ({ albums, match, fetchAlbum }) => {
  const { params: { albumName } } = match;
  const { album } = albums;
  useEffect(() => {
    fetchAlbum(albumName);
  }, [fetchAlbum, albumName]);

  const div = (
    <div>Loading...</div>
  );

  const element = (
    <div>
      Here is a list of tracks in this album
    </div>
  );
  return album ? element : div;
};

const mapStateToProps = ({ albums }) => ({
  albums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumName) => dispatch(fetchAlbum(albumName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
