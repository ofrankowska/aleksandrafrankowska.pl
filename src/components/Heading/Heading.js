import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ theme, bold }) => (bold ? theme.semiBold : theme.medium)};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0.5em 0;
  position: relative;
  ::after {
    opacity: ${({ withUnderline }) => (withUnderline ? 1 : 0)};
    content: '';
    display: block;
    position: absolute;
    bottom: 7px;
    width: ${({ width }) => width};
    height: 10px;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Heading;
