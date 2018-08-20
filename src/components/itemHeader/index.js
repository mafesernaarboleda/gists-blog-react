import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatar';

const ContainerHeader = styled.div`
  display: flex;
`;

const ContainerInfo = styled.div`
  padding-left: 10px;

  a {
    color: #00ab6b;
    text-decoration: none;
  }
`;

const Small = styled.small`
  color: rgba(0, 0, 0, 0.44);
`;

const ItemHeader = ({ url, name, image, date }) => (
  <ContainerHeader>
    <Avatar image={image} />
    <ContainerInfo>
      <div>
        <span>
          <a href={url}>{name}</a>
        </span>
      </div>
      <Small>{date}</Small>
    </ContainerInfo>
  </ContainerHeader>
);

export default ItemHeader;
