import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const FourOFour = () => (
  <div>
    <NavBar />
    <div className="four-o-four">
      <h1 className="fof-header">404</h1>
      <h2 className="fof-not-found">Page not found</h2>
      <Link to="/" className="fof-go-home-link">Back to Home Page</Link>
    </div>
  </div>
);

export default FourOFour;
