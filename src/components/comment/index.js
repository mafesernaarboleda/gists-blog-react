import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemHeader from '../itemHeader';

const Container = styled.div`
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Comment = ({
  description,
  image,
  url,
  name,
  date
}) => (
  <Container>
    <div className="flex-container">
      <ItemHeader url={url} name={name} image={image} date={date} />
      <div className="post-info">
        <p>{description}</p>
      </div>
    </div>
  </Container>
);

Comment.defaultProps = {
  description: 'UNTITLE',
};

Comment.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Comment;
