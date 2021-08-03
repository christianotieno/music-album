import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="navbar">
    <Link to="/" className="logo">Music Album Catalogue</Link>
  </div>
);
export default NavBar;
