import styled from 'styled-components';

const Subheading = styled.h2`
  color: ${({ theme }) => theme.yellow};
  font-weight: ${({ theme }) => theme.semiBold};
  margin: 0.2em 0;
`;

export default Subheading;
