import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  background: none;
  border: none;
  padding: 2rem 1.7rem 2rem 1rem;
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease-in;
`;
const InnerHamburger = styled.div`
  position: relative;
  background-color: white;
  height: 0.3rem;
  width: 2rem;

  ::before,
  ::after {
    content: '';
    position: absolute;
    background-color: white;
    height: 0.3rem;
    left: 0;
  }
  ::before {
    width: 2.8rem;
    top: -1.2rem;
  }
  ::after {
    width: 1.4rem;
    top: 1.2rem;
  }
`;
const Hamburger = ({ isOpen, onClick }) => (
  <StyledHamburger onClick={onClick} isOpen={isOpen}>
    <InnerHamburger />
  </StyledHamburger>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};

export default Hamburger;
