import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NavBar from './NavBar';

const Loading = () => (
  <div>
    <NavBar />
    <div className="loading">
      <Loader
        type="TailSpin"
        color="#fff"
      />
    </div>
  </div>
);

export default Loading;
