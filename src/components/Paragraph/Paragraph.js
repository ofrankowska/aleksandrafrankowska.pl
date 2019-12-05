import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.medium};
`;

export default Paragraph;
