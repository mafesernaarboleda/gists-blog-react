import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarWrapper = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  display: inline-block;
  vertical-align: middle;
  border-radius: 100%;
`;

const Avatar = ({ image }) => <AvatarWrapper width={40} height={40} src={image} />;

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Avatar;
