import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.h1`
  display: inline-block;
  font-weight: ${({ theme, bold }) => (bold ? theme.semiBold : theme.medium)};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 0 1.6rem;
  position: relative;
  ::after {
    opacity: ${({ withUnderline }) => (withUnderline ? 1 : 0)};
    content: '';
    display: block;
    position: absolute;
    bottom: 7px;
    width: 100%;
    height: 10px;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const Heading = ({ children, bold, withUnderline }) => (
  <div>
    <StyledText bold={bold} withUnderline={withUnderline}>
      {children}
    </StyledText>
  </div>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  withUnderline: PropTypes.bool,
};
Heading.defaultProps = {
  bold: false,
  withUnderline: false,
};
export default Heading;
