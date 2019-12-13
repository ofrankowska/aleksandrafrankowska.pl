import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const LogoWrapper = styled.div`
  position: relative;
  font-weight: ${({ theme }) => theme.semiBold};
  cursor: pointer;
  p:first-child {
    margin: 7px 0 0;
    letter-spacing: 0.08rem;
  }
  p:last-child {
    margin: 0 0 7px;
  }
  ::before,
  ::after {
    ${({ withDecoration }) =>
      withDecoration &&
      css`
        position: absolute;
        left: 50%;
        margin-left: -22px;
        content: '';
        height: 0.25rem;
        background-color: white;
        width: 44px;
      `}
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Logo = ({ withDecoration }) => (
  <LogoWrapper withDecoration={withDecoration}>
    <StyledLink to="/">
      <p>Aleksandra</p>
      <p>Frankowska</p>
    </StyledLink>
  </LogoWrapper>
);
Logo.propTypes = {
  withDecoration: PropTypes.bool,
};
Logo.defaultProps = {
  withDecoration: false,
};
export default Logo;
