import React from 'react';
import ItemHeader from '../itemHeader';

const Comment = ({ description, image, url, name, date }) => (
  <div className="post-list-item">
    <div className="flex-container">
      <ItemHeader url={url} name={name} image={image} date={date} />
      <div className="post-info">
        <strong className="pli-title"><a href="/posts/7a075c2e-7ad3-44c8-b8ad-9d9985358bd6">问问</a></strong>
        <small className="pli-username"><a href="/users/mark-wang">Mark Wang</a></small>
      </div>
    </div>
  </div>
);

export default Comment;
