import React from 'react';
import styled from 'styled-components';
import Logo from 'components/molecules/Logo/Logo';
import Navigation from 'components/molecules/Navigation/Navigation';
import SocialIcons from 'components/molecules/SocialIcons/SocialIcons';

const StyledWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
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
  }
`;

const Sidebar = () => (
  <StyledWrapper>
    <Logo withDecoration />
    <Navigation desktop />
    <SocialIcons />
  </StyledWrapper>
);

export default Sidebar;
