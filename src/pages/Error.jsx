import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-center">
        The Page you are looking for doesn't exist or an other error occured. Go to 
        <Link to="/" className="text-decoration-none ms-1">Home Page.</Link>
      </p>
    </div>
  );
};

export default Error;
