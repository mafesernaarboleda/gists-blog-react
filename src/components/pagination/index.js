import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  font-size: 30px;

  a:hover {
    text-decoration: none;
  }
`;

const Pagination = ({ next, prev }) => (
  <Container className="d-flex justify-content-between">
    <div>
      {
        prev
          ? (
            <Link to={`/gists/${prev}`}>
              <span role="img" aria-label="emoji">🔙</span>
            </Link>
          )
          : <span />
      }
    </div>
    <div>
      {
        next
          ? (
            <Link to={`/gists/${next}`}>
              <span role="img" aria-label="emoji">🔜</span>
            </Link>
          )
          : <span />
      }
    </div>
  </Container>
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
