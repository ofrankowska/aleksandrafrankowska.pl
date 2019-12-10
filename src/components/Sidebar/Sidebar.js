import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

const onHover = ({ theme }) => `
    :hover {
      color: ${theme.yellow};
      transition: color 0.3s ease-out;
      cursor: pointer;
  } 
`;

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding: 40px 0;
  height: 100vh;
  width: 175px;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  position: relative;
  color: white;
  text-decoration: none;
  ${onHover};
  p:first-child {
    margin: 7px 0 0;
    letter-spacing: 0.08rem;
  }
  p:last-child {
    margin: 0 0 7px;
  }
  ::before,
  ::after {
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -22px;
    content: '';
    border-top: 0.3rem solid white;
    width: 44px;
  }
`;

const StyledLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const NavigationItem = styled.li`
  margin: 40px 0;
  ${onHover}
  position: relative;
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
  :hover {
    ::after {
      width: 100%;
      transform: scale(1);
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  font-size: 40px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  ${onHover}
`;
const activeStyles = {
  color: '#F0C220',
};
const Sidebar = () => (
  <StyledWrapper>
    <LogoWrapper>
      <StyledLink to="/">
        <p>Aleksandra</p>
        <p>Frankowska</p>
      </StyledLink>
    </LogoWrapper>
    <StyledLinkList>
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
  </StyledWrapper>
);

export default Sidebar;
