import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemHeader from '../itemHeader';

import Color from '../../config/theme';

const Container = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${Color.borderColor};
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
        <p className="pt-3">{description}</p>
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
