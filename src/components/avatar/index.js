import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  display: inline-block;
  vertical-align: middle;
  border-radius: 100%;
`;

const Avatar = ({ image }) => <AvatarWrapper width={40} height={40} src={image} />;

export default Avatar;
