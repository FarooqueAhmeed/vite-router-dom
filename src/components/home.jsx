// pages/index.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">
        Go to About
      </Link>
    </div>
  );
};

export default Home;
