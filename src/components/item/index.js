import React from 'react';
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
  font-family: “Lora”, Georgia, serif;
  font-size: 20px;
  line-height: 1.7;
  font-weight: 300;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  font-size: 22px;
  color: rgba(0, 0, 0, 0.44);
`;

const Main = styled.div`
margin-bottom: 20px;
`;

const Item = ({ id, title, image, url, name, date, files, comments }) => (
  <Panel>
    <ItemHeader url={url} name={name} image={image} date={date} />
    <Main>
      <Title>
        <a href={id}>{title}</a>
      </Title>
      <a href={id}>Read more</a>
    </Main>
    <div>
      <div className="pull-left">
        <div className="like-button-wrapper">
          <form className="button_to" method="get" action="">
            <button className="like-button" data-behavior="trigger-overlay" type="submit">
              <span role="img" aria-label="Emoji">📑</span>
            </button>
          </form>
          <span className="like-count">{files}</span>
        </div>
      </div>
      <div className="response-count pull-right">
        <div className="like-button-wrapper">
          <form className="button_to" method="get" action="">
            <button className="like-button" data-behavior="trigger-overlay" type="submit">
              <span role="img" aria-label="Emoji">💬</span>
            </button>
          </form>
          <span className="like-count">{comments}</span>
        </div>
      </div>
    </div>
  </Panel>
);

export default Item;
