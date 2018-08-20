import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ next, prev }) => (
  <div>
    <div>
      <Link to={`/gists/${prev}`}>{prev}</Link>
    </div>
    <div>
      <Link to={`/gists/${next}`}>{next}</Link>
    </div>
  </div>
);

Pagination.defaultProps = {
  next: '',
  prev: ''
};

Pagination.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
};

export default Pagination;
