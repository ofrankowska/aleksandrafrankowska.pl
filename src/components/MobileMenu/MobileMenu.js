import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger/Hamburger';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.blue};
  padding: 20px;
  height: 100vh;
  width: 100vw;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in;
`;

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledInnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -43px;
`;

const StyledLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;
`;

const NavigationItem = styled.li`
  margin: 40px 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  ${({ theme }) => theme.textHover(theme.yellow)};
`;

const IconWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  margin: 0 12px;
  ${({ theme }) => theme.textHover(theme.yellow)};
`;

const activeStyles = {
  color: '#F0C220',
};

const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <HamburgerWrapper onClick={toggleMobileMenu}>
        <Hamburger onClick={toggleMobileMenu} isOpen={isOpen} />
      </HamburgerWrapper>
      <StyledInnerWrapper>
        <StyledLinkList>
          <NavigationItem>
            <StyledLink to="/" activeStyle={activeStyles}>
              home
            </StyledLink>
          </NavigationItem>
          <NavigationItem>
            <StyledLink to="/about-me" activeStyle={activeStyles}>
              about me
            </StyledLink>
          </NavigationItem>
          <NavigationItem>
            <StyledLink to="/skills" activeStyle={activeStyles}>
              skills
            </StyledLink>
          </NavigationItem>
          <NavigationItem>
            <StyledLink to="/projects" activeStyle={activeStyles}>
              projects
            </StyledLink>
          </NavigationItem>
        </StyledLinkList>
        <IconWrapper>
          <a
            href="https://github.com/ofrankowska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandra-frankowska-52603518a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon icon={faLinkedin} />
          </a>
        </IconWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

MobileMenu.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
