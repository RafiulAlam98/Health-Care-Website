import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { notfoundImg } from '../../images/NotFound/istockphoto-687810238-170667a.jpg';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="text-center text-primary ">
        <span className="text-warning">404 !!! </span>
        THIS PAGE IS NOT FOUND
      </h1>

      <div>
        <Link to="/home">
          <button type="button" className="btn btn-primary ms-5">
            GO BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
