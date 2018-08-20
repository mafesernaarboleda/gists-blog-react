import React from 'react';
import PropTypes from 'prop-types';
import ItemHeader from '../itemHeader';

const Comment = ({
  description,
  image,
  url,
  name,
  date
}) => (
  <div className="post-list-item">
    <div className="flex-container">
      <ItemHeader url={url} name={name} image={image} date={date} />
      <div className="post-info">
        <p>{description}</p>
      </div>
    </div>
  </div>
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
