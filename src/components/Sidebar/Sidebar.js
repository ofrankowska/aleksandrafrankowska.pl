import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const StyledWrapper = styled.div`
  position: fixed;
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
  p:first-child {
    margin: 7px 0 0;
    letter-spacing: 0.05em;
  }
  p:last-child {
    margin: 0 0 7px;
  }
  ::before,
  ::after {
    position: absolute;
    left: 50%;
    margin-left: -22px;
    display: block;
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
  li {
    margin: 40px 0;
  }
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  font-size: 40px;
`;
const Sidebar = () => (
  <StyledWrapper>
    <LogoWrapper>
      <p>Aleksandra</p>
      <p>Frankowska</p>
    </LogoWrapper>
    <StyledLinkList>
      <li>about me</li>
      <li>skills</li>
      <li>projects</li>
    </StyledLinkList>
    <IconWrapper>
      <FontAwesomeIcon icon={faGithubSquare} />
      <FontAwesomeIcon icon={faLinkedin} />
    </IconWrapper>
  </StyledWrapper>
);

export default Sidebar;
