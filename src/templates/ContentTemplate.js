import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';

const StyledWrapper = styled.div`
  padding: 40px 20px;
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 75px;
  }
  ${({ theme }) => theme.mq.desktop} {
    text-align: left;
    display: flex;
    align-items: center;
  }
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
