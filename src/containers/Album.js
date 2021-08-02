import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchTracks from '../actions/fetchTracks';
import TrackItem from '../components/TrackItem';

const Album = ({ albums, match, fetchTracks }) => {
  const { params: { albumName } } = match;
  const { tracks } = albums;
  useEffect(() => {
    fetchTracks(albumName);
  }, [fetchTracks, albumName]);

  const div = (
    <div>Loading...</div>
  );

  const element = (
    <div>
      Here is a list of tracks in this album
      {
          albums.tracks.map((track) => (
            <TrackItem
              track={track}
              key={track.id}
            />
          ))
        }
    </div>
  );
  return tracks ? element : div;
};

const mapStateToProps = ({ albums, tracks }) => ({
  albums,
  tracks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumName) => dispatch(fetchTracks(albumName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
