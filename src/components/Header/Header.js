import React, { useState } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.blue};
  padding: 20px;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };
  return (
    <div>
      <StyledWrapper>
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <Logo />
      </StyledWrapper>
      <MobileMenu isOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </div>
  );
};

export default Header;
