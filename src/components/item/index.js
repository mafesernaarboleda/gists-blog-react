import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemHeader from '../itemHeader';

const Panel = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0 20px;
  background: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid rgba(0,0,0,0.09);
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  border-radius: 3px;
`;

const Title = styled.h3`
  border: none;
  font-family: "Lora", Georgia, serif;
  white-space: pre-line;

  a {
    color: rgba(0,0,0,0.8);
    text-decoration: none;
    font-weight: 700;
    font-size: 23px;
    line-height: 1.1;

    &:hover {
      color: #00ab6b;
      text-decoration: none;
    }
  }
`;

const Main = styled.div`
  margin-bottom: 20px;

  a.read-more {
    text-decoration: none;
    color: rgba(0,0,0,0.3);
    font-size: 12px;
    margin-top: 16px;
  }
`;

const EmojiWrapper = styled.div`
  font-size: ${props => (props.font ? props.font : '15px')};
`;

const Count = styled.span`
  color: #00ab6b;
  padding-left: 5px;
`;

const Item = ({
  id,
  title,
  image,
  url,
  name,
  date,
  files,
  comments
}) => (
  <Panel>
    <ItemHeader url={url} name={name} image={image} date={date} />
    <Main>
      <Title>
        <Link to={`/gists/${id}`} className="link">{title}</Link>
      </Title>
      <Link to={`/gists/${id}`} className="read-more">
        <span>Read more</span>
      </Link>
    </Main>
    <div className="d-flex justify-content-between">
      <EmojiWrapper>
        <span role="img" aria-label="Emoji">📑</span>
        <Count>
          {files}
          &nbsp;files
        </Count>
      </EmojiWrapper>
      <EmojiWrapper>
        <span role="img" aria-label="Emoji">💬</span>
        <Count>
          {comments}
         &nbsp;comments
        </Count>
      </EmojiWrapper>
    </div>
  </Panel>
);

Item.defaultProps = {
  title: 'UNTITLE',
  image: '',
  url: '',
  name: '',
  date: '',
  files: 0,
  comments: 0
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  files: PropTypes.number,
  comments: PropTypes.number,
};

export default Item;
