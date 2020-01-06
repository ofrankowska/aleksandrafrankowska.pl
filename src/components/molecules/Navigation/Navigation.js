import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const StyledLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    text-align: left;
  }
  ${({ footer }) =>
    footer &&
    css`
      margin-top: 32px;
      font-size: ${({ theme: { fontSize } }) => fontSize.s};
      text-align: left;
      font-weight: ${({ theme }) => theme.medium};
    `}
`;

const NavigationItem = styled.li`
  margin: ${({ footer }) => (footer ? '16px 0' : '40px 0')};
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    ::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 6px;
      background-color: ${({ theme }) => theme.yellow};
      z-index: -1;
      background-size: cover;
      background-repeat: no-repeat;
      transform: scale(0);
      transition: transform 0.3s ease-out;
    }
  }
  :hover {
    ::after {
      transform: scale(1);
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  ${({ theme }) => theme.textHover(theme.yellow)};
`;

const activeStyles = {
  color: '#F0C220',
};
const Navigation = ({ desktop, footer }) => (
  <StyledLinkList footer={footer}>
    {!desktop && (
      <NavigationItem footer={footer}>
        <StyledLink to="/" activeStyle={activeStyles}>
          home
        </StyledLink>
      </NavigationItem>
    )}
    <NavigationItem footer={footer}>
      <StyledLink to="/about-me" activeStyle={activeStyles}>
        about me
      </StyledLink>
    </NavigationItem>
    <NavigationItem footer={footer}>
      <StyledLink to="/skills" activeStyle={activeStyles}>
        skills
      </StyledLink>
    </NavigationItem>
    <NavigationItem footer={footer}>
      <StyledLink to="/projects" activeStyle={activeStyles}>
        projects
      </StyledLink>
    </NavigationItem>
  </StyledLinkList>
);

Navigation.propTypes = {
  desktop: PropTypes.bool,
  footer: PropTypes.bool,
};

Navigation.defaultProps = {
  desktop: false,
  footer: false,
};
export default Navigation;
