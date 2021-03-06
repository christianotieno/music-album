import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import fetchTracks from '../actions/fetchTracks';
import TrackItem from '../components/TrackItem';
import NavBar from '../components/NavBar';
import FourOFour from '../components/404';
import Loading from '../components/Loading';

const Album = ({ albums, match, fetchTracks }) => {
  const { params: { albumName } } = match;
  const { tracks } = albums;
  useEffect(() => {
    fetchTracks(albumName);
  }, [fetchTracks, albumName]);

  if (albums.tracksLoading) {
    return <Loading />;
  }

  const view = tracks ? (
    <div className="tracks-page">
      <NavBar />
      {
          albums.tracks.map((track) => (
            <TrackItem
              track={track}
              key={track.id}
            />
          ))
        }
    </div>
  ) : (
    <FourOFour />
  );
  return view;
};

const mapStateToProps = ({ albums, tracks }) => ({
  albums,
  tracks,
});

Album.propTypes = {
  albums: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchTracks: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumName) => dispatch(fetchTracks(albumName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
