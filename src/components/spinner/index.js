import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height:130px;
  width: 130px;
`;

const Spinner = () => (
  <div className="d-flex justify-content-center">
    <Image src="http://gifimage.net/wp-content/uploads/2017/08/loading-gif-transparent-4.gif" alt="loader" />
  </div>
);

export default Spinner;
