import styled from 'styled-components';

const Button = styled.button`
  border: solid 3px ${({ theme }) => theme.yellow};
  background: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.medium};
  border-radius: 10px;
  width: 117px;
  height: 38px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s ease-out;

  ::after {
    position: absolute;
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
    border-radius: 50% 50% 0 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-out;
  }
  :hover {
    color: white;
    ::after {
      transform: translateY(0);
    }
  }
`;

export default Button;
