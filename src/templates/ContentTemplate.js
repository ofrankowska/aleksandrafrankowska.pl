import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';

const StyledWrapper = styled.div`
  padding: 25px 25px 25px 75px;
`;
const ContentTemplate = ({ children }) => (
  <MainTemplate>
    <StyledWrapper>{children}</StyledWrapper>
  </MainTemplate>
);

ContentTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentTemplate;
