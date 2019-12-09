import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.blue};
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 20px 75px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 5px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.medium};
  margin-bottom: auto;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  opacity: 0.6;
  font-weight: ${({ theme }) => theme.medium};
  margin: 0;
`;

const Footer = () => (
  <StyledWrapper>
    <StyledHeading bold>get in touch</StyledHeading>
    <StyledLink href="mailto:olafrankowska112@gmail.com">
      olafrankowska112@gmail.com
    </StyledLink>
    <StyledParagraph>
      @ 2019 Aleksandra Frankowska. All rights reserved
    </StyledParagraph>
  </StyledWrapper>
);
export default Footer;
