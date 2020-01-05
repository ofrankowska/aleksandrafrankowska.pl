import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Navigation from 'components/molecules/Navigation/Navigation';
import SocialIcons from 'components/molecules/SocialIcons/SocialIcons';

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

const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <HamburgerWrapper onClick={toggleMobileMenu}>
        <Hamburger onClick={toggleMobileMenu} isOpen={isOpen} />
      </HamburgerWrapper>
      <StyledInnerWrapper>
        <Navigation />
        <SocialIcons />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

MobileMenu.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
